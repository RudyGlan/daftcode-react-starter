import React from "react";
import PropTypes from "prop-types";
import Error from "../../general/Error"
//import "../../../styles/components/structure/MainContent.sass";

import FlightHighlight from "../../launchdetails/FlightHighlight";
import FlightDescription from "../../launchdetails/FlightDescription";

// import MissionHighlight from '../../launchdetails/MissionHighlight';
// import FlightDetails from '../../launchdetails/FlightDetails';
// import RocketDetails from '../../launchdetails/RocketDetails';
// import LaunchPadDetails from '../../launchdetails/LaunchPadDetails';
// import MissionLinks from '../../launchdetails/MissionLinks';


class DetailsBody extends React.Component {

  render() {
    const {launch, launchSite, rocket} = this.props;

    return (
      <div>
        {launch && launchSite && rocket ? 
      <div className="details__body">
        <div className="details__body-content">
          <div className="flight">
            <FlightHighlight launch={launch}/>
            <FlightDescription 
                  launch={launch} 
                  rocket={rocket}
                  launchSite={launchSite}/>
          </div>
        </div>
      </div> : <Error/>}

      </div>
    );
  }
}

export default DetailsBody;
