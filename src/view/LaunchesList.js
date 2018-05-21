import React from 'react';
import PropTypes from 'prop-types';

import ListHeader from "../components/structure/list/ListHeader";
import ListFilter from "../components/structure/list/ListFilter";
import ListBody from "../components/structure/list/ListBody";

import {getAllLaunches, getAllRocketLaunches} from '../components/general/SpacexApi'
import Loading from '../components/general/Loading'

// import ListBody from "../components/structure/list/ListBody";

import './LaunchesList.sass';

class LaunchesList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      rocketNameFilter: '',
      filteredLaunches: null,
      isLoading: false
    };

    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  get availableRocketNames() {
    // const {launches} = this.props;

    // let rocketSet = new Set();
    // const rocketNames = [];
    // if(launches){
    //   launches.forEach(flight => {
    //     rocketSet.add(flight.rocket.rocket_id);
    //   });
    //   rocketSet.forEach(name => {
    //     rocketNames.push(name);
    //   })
    // }
    let rocketNames = [];
    rocketNames.push({id: 'all', name: 'all rockets'});
    rocketNames.push({id: 'falcon1', name: 'falcon 1'});
    rocketNames.push({id: 'falcon9', name: 'falcon 9'});
    rocketNames.push({id: 'falcon10', name: 'falcon 10'});
    rocketNames.push({id: 'falconheavy', name: 'falcon heavy'});
    return rocketNames;
  }

  getLaunches() {

  }

  // get filteredLaunches(){
  //   const {rocketNameFilter} = this.state;
  //   const {launches} = this.props;

  //   if(!rocketNameFilter) return launches;

  //   return launches.filter( launch => launch.rocket.rocket_id === rocketNameFilter );
  // }

  componentDidMount() {
    this.handleFilterChange('all');
  }

  handleFilterChange(value) {
    this.setState({isLoading: true});
    
    if(value == 'all' ) {
      getAllLaunches().then(list =>{
        this.setState({ 
          rocketNameFilter: '',
          isLoading: false,
          filteredLaunches: list
        });
      })
    }
    else {
      getAllRocketLaunches(value).then(list => {
        this.setState({ 
          rocketNameFilter: value,
          isLoading: false,
          filteredLaunches: list
        })
      })
    };
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
        {this.state.isLoading ? <Loading/> : 
        <ListBody 
          launches={this.state.filteredLaunches}
          onLaunchClick={onLaunchClick}/>
        }
      </div>
    );
  }
}

export default LaunchesList;
