import React from "react";
import PropTypes from "prop-types";

import "../../styles/components/launchdetails/Details.sass";

class LaunchPadDetails extends React.Component {

  render() {
    const {launchSite} = this.props;

    return (
        <section id="paddetails" className="details">
            <h2 className="details__title">launch pad</h2>
            <hr className="details__line"/>
            <div className="infotable">
                <div className="infotable-half">
                    <ul className="infotable__props">
                        <li className="infotable__item"><span className="infotable__name">name:</span><span className="infotable__value">{launchSite.full_name}</span></li>
                    </ul>
                </div>
                <div className="infotable-half">
                    <ul className="infotable__props">
                        <li className="infotable__item"><span className="infotable__name">location:</span><span className="infotable__value">{launchSite.location.name}, {launchSite.location.region}</span></li>
                    </ul>
                </div>
            </div>
            <p className="details__description">{launchSite.details}</p>
        </section>
    );
  }
}

export default LaunchPadDetails;
