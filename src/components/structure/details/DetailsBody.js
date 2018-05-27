import React from "react";
import PropTypes from "prop-types";
import Error from "../../general/Error"

import FlightHighlight from "../../launchdetails/FlightHighlight";
import FlightDescription from "../../launchdetails/FlightDescription";

import { Provider } from 'mobx-react';
import MainStore from '../../../stores/MainStore';
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';

@inject('MainStore')
@observer
class DetailsBody extends React.Component {

  render() {
    // const {launch, launchSite, rocket} = this.props;
    const {isError, errorStatus} = this.props.MainStore.listState;
    return (
      <div>
        {!isError ? 
      <div className="details__body">
        <div className="details__body-content">
          <div className="flight">
          <Provider MainStore={MainStore}>
            <FlightHighlight/>
          </Provider>
          <Provider MainStore={MainStore}>
            <FlightDescription/>
          </Provider>
          </div>
        </div>
      </div> : <Error status={errorStatus}/>}

      </div>
    );
  }
}

export default DetailsBody;
