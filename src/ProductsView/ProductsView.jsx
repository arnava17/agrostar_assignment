import React, {Component} from 'react';
import './ProductsView.scss';
import Product from '../Product/Product';
import SearchBar from '../SearchBar/SearchBar';
import _ from 'lodash';

class ProductsView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchTerm : ""
    }

    this.getBagCountFromSkuCode = this.getBagCountFromSkuCode.bind(this);
  }

  filterBySearchTerm(event) {
    this.setState({searchTerm: event.target.value});
  }

  getBagCountFromSkuCode(skuCode) {
    return this.props.bag[skuCode] ? this.props.bag[skuCode].itemCount : 0;
  }

  render() {
    let productList = _.values(this.props.products);
    let searchTerm = this.state.searchTerm;
    productList = productList.filter(({productName}) => {
      return productName.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
      <div className="products-view">
        <SearchBar onChange={(e) => {this.filterBySearchTerm(e)}}></SearchBar>
        { productList.length === 0 &&
          <p className="no-items">No results to display</p>
        }
        <div className="product-list">
          {productList.map((product) => {
            return <Product key={product.skuCode} product={product} onBagUpdate={(skuCode, update) => {this.props.onBagUpdate(skuCode, update)}} bagCount={this.getBagCountFromSkuCode(product.skuCode)}></Product>
          })
        }
        </div>
      </div>
    )
  }
}

export default ProductsView;
