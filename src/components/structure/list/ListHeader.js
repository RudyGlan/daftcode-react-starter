import React from "react";
import PropTypes from "prop-types";
import spaceXLogoSrc from '../../../assets/img/space_x_logo_bw_centered.png';

class ListHeader extends React.Component {

  render() {
    return (
      <div className="list__header">
        <div className="list__header-content">
          <span className="list__header-logo">
            <img
                src={spaceXLogoSrc}
                className="list__brand"
                alt="SpaceX logo"
              />
          </span>
          <span className="list__header-text">launches 2018</span>
        </div>
      </div>
    );
  }
}

export default ListHeader;
