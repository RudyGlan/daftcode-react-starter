import React from 'react';
import PropTypes from 'prop-types';

import Header from "../components/launchdetails/Header";
import MainContent from "../components/launchdetails/MainContent"
import Footer from "../components/launchdetails/Footer";
//import './LunchDetails.sass';

class LunchDetails extends React.Component {
  static propTypes = {
  }

  state = {
    welcomeText: 'Hello',
  };

  render() {
    const {launch, launchSite, rocket} = this.props;
    console.log(rocket);
    console.log(launch);
    console.log(launchSite);
    return (
      <div>
        <Header/>
        <MainContent/>
        <Footer/>
      </div>
    );
  }
}

export default LunchDetails;
