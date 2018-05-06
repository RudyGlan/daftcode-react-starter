import React from "react";
import PropTypes from "prop-types";

import "../../styles/components/structure/MainContent.sass";

class FlightDetails extends React.Component {

  render() {
    const {launch} = this.props;

    return (
        <section id="flightdetails" className="rocketinfo">
            <h2>details</h2>
            <hr/>
            <p className="description">{launch.details}</p>
        </section>
    );
  }
}

export default FlightDetails;
