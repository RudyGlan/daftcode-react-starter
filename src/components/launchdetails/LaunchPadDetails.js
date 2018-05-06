import React from "react";
import PropTypes from "prop-types";

import "../../styles/components/structure/MainContent.sass";

class LaunchPadDetails extends React.Component {

  render() {
    const {launchSite} = this.props;

    return (
        <section id="paddetails" className="rocketinfo">
            <h2>launch pad</h2>
            <hr/>
            <div className="sectiontable">
                <div className="sectiontablehalf">
                    <ul  className="sectionpops">
                        <li><span className="propname">name:</span><span className="propvalue">{launchSite.full_name}</span></li>
                    </ul>
                </div>
                <div className="sectiontablehalf">
                    <ul  className="sectionpops">
                        <li><span className="propname">location:</span><span className="propvalue">{launchSite.location.name}, {launchSite.location.region}</span></li>
                    </ul>
                </div>
            </div>
            <p className="description">{launchSite.details}</p>
        </section>
    );
  }
}

export default LaunchPadDetails;
