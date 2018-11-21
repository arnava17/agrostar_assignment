import React, {Component} from "react";
import './Product.scss';

class Product extends Component {

  render() {
    let product = this.props.product;
    let bagCount = this.props.bagCount;
    let skuCode = product.skuCode;

    let bagElement = null;
    if(bagCount) {
      bagElement = (
        <div className="bag-update">
          <button className="left" onClick={() => {this.props.onBagUpdate(skuCode,-1)}}>-</button>
          <p>{bagCount}</p>
          <button className="right" onClick={() => {this.props.onBagUpdate(skuCode,+1)}}>+</button>
        </div>
      )
    } else {
      bagElement = (
        <button className = "add-to-bag" onClick={() => {this.props.onBagUpdate(skuCode,1)}}>ADD</button>
      )
    }

    return (
      <div className="product">
        <div className="image">
          {product.defaultOffer &&
            <p className="offer">{product.defaultOffer}</p>
          }
          <img src={product.productImages[0].name} alt={product.producName}></img>
        </div>
        <p className="name">{product.productName}</p>
        <p className="price">{`Rs. ${product.mrp}`}</p>
        {bagElement}
      </div>
    );
  }
}

export default Product;
