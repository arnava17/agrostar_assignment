import React from 'react';
import './AgroHeader.scss';
import BagButton from '../BagButton/BagButton';
import HomeButton from '../HomeButton/HomeButton';

function AgroHeader (props) {

  return (
      <div>
      <header className="agro-header">
        <img src="logo.png" alt="Agrostar" onClick={() => props.changeView('PRODUCTS')}></img>
        { props.view === 'PRODUCTS' &&
          <BagButton bagCount={props.bagCount} onClick={() => {props.changeView('BAG')}}></BagButton>
        }
        { props.view === 'BAG' &&
          <HomeButton onClick={() => {props.changeView('PRODUCTS')}}></HomeButton>
        }
      </header>
      <div className="clear">
      </div>
      </div>

  )
}

export default AgroHeader;
