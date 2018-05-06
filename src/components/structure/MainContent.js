import React from "react";
import PropTypes from "prop-types";

import "../../styles/components/structure/MainContent.sass";

import MissionHighlight from '../launchdetails/MissionHighlight';
import FlightDetails from '../launchdetails/FlightDetails';
import RocketDetails from '../launchdetails/RocketDetails';
import LaunchPadDetails from '../launchdetails/LaunchPadDetails';
import MissionLinks from '../launchdetails/MissionLinks';


class MainContent extends React.Component {

  render() {
    const {launch, launchSite, rocket} = this.props;

    return (
      <main>
        <article>
          <section className="launchinfo">
            <div className="baseInfo half">
              <MissionHighlight 
                launch={launch} 
                rocket={rocket}/>
            </div>
            <div className="specificInfo half">
              <FlightDetails launch={launch}/>
              <RocketDetails rocket={rocket}/>
              <LaunchPadDetails launchSite={launchSite}/>
            </div>
          </section>
          <MissionLinks launch={launch}/>
        </article>
      </main>
    );
  }
}

export default MainContent;
