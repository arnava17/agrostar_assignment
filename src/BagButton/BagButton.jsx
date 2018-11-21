import React from 'react';
import './BagButton.scss';

function BagButton(props) {
  let bagCount = props.bagCount;
  return (
    <button onClick={props.onClick} className="bag-button btn">
      <div>
        <i className="fa fa-shopping-bag"><span>My Bag</span></i>
      </div>
      <div className="bag-counter">
        <i className="fa">{bagCount}</i>
      </div>
    </button>
  )


}

export default BagButton;
