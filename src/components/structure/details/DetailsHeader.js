import React from "react";
import PropTypes from "prop-types";
import spaceXLogoSrc from '../../../assets/img/space_x_logo_bw_centered.png';
import arrowPointerSrc from '../../../assets/img/arrow_pointer.png';
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';

// import logo from "../../../assets/img/space_x_logo_bw_centered.png"
// import "../../../styles/components/structure/Header.sass";
// import arrow from "../../../assets/img/arrow_pointer.png"

@inject('MainStore')
@observer
class DetailsHeader extends React.Component {

  static propTypes = {
    MainStore: PropTypes.object,
  }

  @action.bound
  handleBackClick = () => {
    const { MainStore } = this.props;
    MainStore.switchView('list');
  }

  render() {

    return (
      <div className="details__header">
        <div className="details__header-content">
          <div className="details__header-side">
            <a href="#" className="details__header-action" onClick={this.handleBackClick}>
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
    );
  }
}

export default DetailsHeader;
