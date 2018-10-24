import React from "react";
import Header from '../Pages/Header';
import Carousel from '../Pages/Carousel';

const Nav = (props) => (
  <div>    
      <Header className="navbar-brand" href="/" />
      <Carousel />
      <div id = "ymmt">
          <label for="year">YEAR: <select name="car-years" id="car-years" ></select></label>
          <br/>
          <label for="make">MAKE: <select name="car-makes" id="car-makes"  value={props.value} 
          onChange={props.handleCarChange}></select></label>
          <br/>
          <label for="MODEL">MODEL: <select name="car-models" id="car-models"></select></label>
          <br/>
          <label for="TRIM">TRIM: <select name="car-model-trims" id="car-model-trims"></select></label>
          <br/>
          <button
              id = "CarSubmitButton"
              onClick={props.handleCarSubmit}
              className="btn btn-primary mt-3">
              MY CAR
          </button>
      </div>
  </div>
);

export default Nav;
