import React from 'react';
import PropTypes from 'prop-types';

import ListHeader from "../components/structure/list/ListHeader";
import ListFilter from "../components/structure/list/ListFilter";
import ListBody from "../components/structure/list/ListBody";
// import ListBody from "../components/structure/list/ListBody";

import './LaunchesList.sass';

class LaunchesList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      rocketNameFilter: '',
    };

    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  get availableRocketNames() {
    const {launches} = this.props;

    let rocketSet = new Set();
    const rocketNames = [];
    
    launches.forEach(flight => {
      rocketSet.add(flight.rocket.rocket_name);
    });
    rocketSet.forEach(name => {
      rocketNames.push(name);
    })
    return rocketNames;
  }

  get filteredLaunches(){
    const {rocketNameFilter} = this.state;
    const {launches} = this.props;

    if(!rocketNameFilter) return launches;

    return launches.filter( launch => launch.rocket.rocket_name === rocketNameFilter );
  }

  handleFilterChange(value) {
    if(value == 'all' ) this.setState({ rocketNameFilter: '' });
    else this.setState({ rocketNameFilter: value });
  }

  render() {
    const {launches, onLaunchClick} = this.props;
    return (
      <div className="list">
        <ListHeader/>
        <ListFilter
          options={this.availableRocketNames}
          onChange={this.handleFilterChange}
        />
        <ListBody 
          launches={this.filteredLaunches}
          onLaunchClick={onLaunchClick}/>
      </div>
    );
  }
}

export default LaunchesList;
