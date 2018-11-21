import React from 'react';
import './ItemsHeader.scss';

function ItemsHeader (props) {
  let bag = props.bag;

  let totalItems = 0;
  let totalAmount = 0;

  Object.keys(bag).forEach((key) => {
    let product = bag[key];
    totalItems += product.itemCount;
    totalAmount += product.itemCount * product.mrp;
  })

  return (
      <div>
      <header className="items-header">
        <span>{`${totalItems} items`}</span>
        <span>{`|`}</span>
        <span>{`Rs. ${totalAmount}`}</span>
        <span className="checkout">Checkout <i className="fa fa-level-up"></i></span>
      </header>
      <div className="clear">
      </div>
      </div>

  )
}

export default ItemsHeader;
