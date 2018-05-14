import React from 'react';
import PropTypes from 'prop-types';

import DetailsHeader from "../components/structure/details/DetailsHeader";
import DetailsBody from "../components/structure/details/DetailsBody";
import DetailsControls from "../components/structure/details/DetailsControls";

import './LaunchDetails.sass';

class LunchDetails extends React.Component {

  render() {
    const {launch, launchSite, rocket, onBackClick} = this.props;

    return (
      <div className="details">
        <DetailsHeader
          onBackClick={onBackClick}/>
        <DetailsBody 
          launch={launch}
          launchSite={launchSite}
          rocket={rocket}/>
        <DetailsControls 
          launch={launch}/>
      </div>
    );
  }
}

export default LunchDetails;
