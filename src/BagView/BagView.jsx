import React from 'react';
import Product from '../Product/Product';
import './BagView.scss';
import ItemsHeader from '../ItemsHeader/ItemsHeader';
import _ from 'lodash';

function BagView (props) {
  let productList = _.values(props.bag);
  if(productList.length === 0 ){
    return <p className="no-items">{`You do not have any items added in the cart`}</p>
  }

  return (
    <div className="bag-view">
      <ItemsHeader bag={props.bag}></ItemsHeader>
      <div className="product-list">
        {productList.map((product) => {
          return <Product key={product.skuCode} product={product} onBagUpdate={(skuCode, update) => {props.onBagUpdate(skuCode, update)}} bagCount={product.itemCount}></Product>
        })
      }
      </div>
    </div>
  )
}

export default BagView;
