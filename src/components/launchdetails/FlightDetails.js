import React from "react";
import PropTypes from "prop-types";

import "../../styles/components/launchdetails/Details.sass";

class FlightDetails extends React.Component {

  render() {
    const {launch} = this.props;

    return (
        <section id="flightdetails" className="details">
            <h2 className="details__title">details</h2>
            <hr className="details__line"/>
            <p className="details__description">{launch.details}</p>
        </section>
    );
  }
}

export default FlightDetails;
