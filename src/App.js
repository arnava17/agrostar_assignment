import React, { Component } from 'react';
import './App.scss';
import AgroHeader from './AgroHeader/AgroHeader';
import ProductsView from './ProductsView/ProductsView';
import BagView from './BagView/BagView';

import _ from 'lodash';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      loading: true,
      products: [],
      bag : {},
      view : "PRODUCTS"
    }
    this.getProducts.call(this);
  }

  getProducts() {
    fetch('http://www.mocky.io/v2/5b3de5ed310000db1f6de257')
      .then((response) => {
        return response.json();
      }).then(({responseData}) => {
        let products = _.keyBy(responseData.productList, 'skuCode')
        this.setState({
          loading : false,
          products,
        });
      });
  }

  changeView(view) {
    this.setState({view});
  }

  getTotalBagCount() {
    let bag = this.state.bag;
    let bagCount = 0;
    Object.keys(bag).forEach((key) => {
      bagCount += bag[key].itemCount;
    });
    return bagCount;
  }

  updateBag(skuCode, update) {
    let bag = this.state.bag;
    let product = bag[skuCode];

    if(product) {
      product.itemCount += update;
    } else if(update === 1){
      product = {
        ...this.state.products[skuCode],
        itemCount : 1
      };
      product.itemCount = 1;
    }

    if(product.itemCount === 0) {
      delete bag[skuCode];
    } else {
      bag[skuCode] = product;
    }

    this.setState({
      bag
    });
  }

  render() {
    let view = this.state.view;
    let viewPage;
    if(this.state.loading) {
      return <div>Loading..</div>
    }

    if(view === "PRODUCTS") {
      viewPage = (
        <ProductsView products={this.state.products} bag={this.state.bag}
          onBagUpdate={(skuCode, update) => {this.updateBag(skuCode, update)}}></ProductsView>
      )
    } else if(view === "BAG") {
      viewPage = (
        <BagView bag={this.state.bag}
        onBagUpdate={(skuCode, update) => {this.updateBag(skuCode, update)}}></BagView>
      )
    }

    return (
      <div className="App">
        <AgroHeader bagCount={this.getTotalBagCount()} changeView={(view) => {this.changeView(view)}} view={this.state.view}></AgroHeader>
        {viewPage}
      </div>
    );
  }
}

export default App;
