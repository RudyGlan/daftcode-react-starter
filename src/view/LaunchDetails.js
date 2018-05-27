import React from 'react';
import PropTypes from 'prop-types';

import DetailsHeader from "../components/structure/details/DetailsHeader";
import DetailsBody from "../components/structure/details/DetailsBody";
import DetailsControls from "../components/structure/details/DetailsControls";

import { Provider } from 'mobx-react';
import MainStore from '../stores/MainStore';

import './LaunchDetails.sass';

class LunchDetails extends React.Component {

  render() {
    scroll(0,0);
    return (
      <div className="details">
        <Provider MainStore = {MainStore}>
          <DetailsHeader/>
        </Provider>
        <Provider MainStore = {MainStore}>
          <DetailsBody />
        </Provider>
        <Provider MainStore = {MainStore}>
          <DetailsControls />
        </Provider>
      </div>
    );
  }
}

export default LunchDetails;
