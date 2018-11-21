import React from 'react';
import './HomeButton.scss';

function HomeButton(props) {
  return (
    <button onClick={props.onClick} className="home-button btn">
      <div>
        <i className="fa fa-home"><span>Home</span></i>
      </div>
    </button>
  )


}

export default HomeButton;
