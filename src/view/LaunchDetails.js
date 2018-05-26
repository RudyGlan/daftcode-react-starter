import React from 'react';
import PropTypes from 'prop-types';

import DetailsHeader from "../components/structure/details/DetailsHeader";
import DetailsBody from "../components/structure/details/DetailsBody";
import DetailsControls from "../components/structure/details/DetailsControls";

// import { Provider } from 'mobx-react';
// import MainStore from '../stores/MainStore';
import './LaunchDetails.sass';

class LunchDetails extends React.Component {

  render() {
    const {launch, launchSite, rocket, onBackClick, errorStatus, isError} = this.props;
    scroll(0,0);
    return (
      <div className="details">
      {/* <Provider MainStore = {MainStore}> */}
        <DetailsHeader
          onBackClick={onBackClick}/>
      {/* </Provider> */}
        <DetailsBody 
          launch={launch}
          launchSite={launchSite}
          rocket={rocket}
          isError={isError}
          errorStatus={errorStatus}/>
        <DetailsControls 
          launch={launch}
          isError={isError}/>
      </div>
    );
  }
}

export default LunchDetails;
