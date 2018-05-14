import React from "react";
import PropTypes from "prop-types";
import spaceXLogoSrc from '../../../assets/img/space_x_logo_bw_centered.png';
import arrowPointerSrc from '../../../assets/img/arrow_pointer.png';

// import logo from "../../../assets/img/space_x_logo_bw_centered.png"
// import "../../../styles/components/structure/Header.sass";
// import arrow from "../../../assets/img/arrow_pointer.png"

class DetailsHeader extends React.Component {

  render() {
    let {onBackClick} = this.props;

    return (
      <div className="details__header">
        <div className="details__header-content">
          <div className="details__header-side">
            <a href="#" className="details__header-action" onClick={onBackClick}>
              <span className="details__header-action-icon icon-arrow-back">
                <img
                  src={arrowPointerSrc}
                  alt=""
                />
              </span>
              <span className="details__header-action-text">Go back</span>
            </a>
          </div>

          <div className="details__header-main">
            <img
                src={spaceXLogoSrc}
                className="details__brand"
                alt="SpaceX logo"
              />
          </div>
          <div className="details__header-side" />
        </div>
      </div>

      //   <div className="goback">
      //     <a className="goback__link" href="#" onClick={onBackClick}>
      //       <div className="goback__btn">
      //         <img className="goback__arrowhead" src={arrow} alt="<arrow<"/>
      //         <hr className="goback__arrowline"/>
      //         <span className="goback__text">go back</span>
      //       </div>
      //     </a>
      //   </div>
      //   <div className="logo">
      //     <a href="http://www.spacex.com/">
      //       <img className="logo__img" src={logo} alt="spacex_logo"/>
      //     </a>
      //   </div>
      // </div>
    );
  }
}

export default DetailsHeader;
