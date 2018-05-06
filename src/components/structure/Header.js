import React from "react";
import PropTypes from "prop-types";
import logo from "../../assets/img/space_x_logo_bw_centered.png"
import "../../styles/components/structure/Header.sass";
import arrow from "../../assets/img/arrow_pointer.png"

class Header extends React.Component {

  render() {
    return (
      <header className="header">
        <div className="goback">
          <a className="goback__link" href="#">
            <div className="goback__btn">
              <img className="goback__arrowhead" src={arrow} alt="<arrow<"/>
              <hr className="goback__arrowline"/>
              <span className="goback__text">go back</span>
            </div>
          </a>
        </div>
        <div className="logo">
          <a href="http://www.spacex.com/">
            <img className="logo__img" src={logo} alt="spacex_logo"/>
          </a>
        </div>
      </header>
    );
  }
}

export default Header;
