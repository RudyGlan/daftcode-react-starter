import React from 'react';
import PropTypes from 'prop-types';

import Header from "../components/structure/Header";
import MainContent from "../components/structure/MainContent"
import Footer from "../components/structure/Footer";

class LunchDetails extends React.Component {
  static propTypes = {
  }

  state = {
    welcomeText: 'Hello',
  };

  render() {
    const {launch, launchSite, rocket} = this.props;

    return (
      <div>
        <Header/>
        <MainContent 
          launch={launch}
          launchSite={launchSite}
          rocket={rocket}/>
        <Footer/>
      </div>
    );
  }
}

export default LunchDetails;
