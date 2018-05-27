import React from 'react';
import PropTypes from 'prop-types';

import ListHeader from "../components/structure/list/ListHeader";
import ListFilter from "../components/structure/list/ListFilter";
import ListBody from "../components/structure/list/ListBody";

import {getLaunchById, getAllLaunches, getAllRocketLaunches} from '../components/general/SpacexApi'
import Loading from '../components/general/Loading'
import Error from '../components/general/Error'

import { Provider } from 'mobx-react';
import MainStore from '../stores/MainStore';

// import ListBody from "../components/structure/list/ListBody";

import './LaunchesList.sass';

import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';

@inject('MainStore')
@observer
class LaunchesList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {isListLoading, isError, errorStatus} = this.props.MainStore.listState;
    return (
      <div className="list">
        <ListHeader/>
        <Provider MainStore = {MainStore}> 
          <ListFilter/>
        </Provider>
        {isListLoading ? <Loading/> : isError ? <Error status={errorStatus}/> :
        <Provider MainStore = {MainStore}> 
          <ListBody/>
        </Provider>
        }
      </div>
    );
  }
}

export default LaunchesList;
