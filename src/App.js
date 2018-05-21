import { hot } from 'react-hot-loader';
import * as React from 'react';

import LaunchDetails from './view/LaunchDetails';
import LaunchesList from './view/LaunchesList';
import PageFooter from './components/structure/PageFooter';

import Loading from './components/general/Loading';

import {getLaunchByNumber, getUpcomingLaunchByNumber, getAllLaunches, getRocketById, getLaunchpadById} from './components/general/SpacexApi'

import './styles/theme.sass';

class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      viewName: 'list',
      launchesList: null,
      actvieLaunch: null,
      activeRocket: null,
      activeLaunchPad: null,
      isLoading: false
    };

    this.handleLaunchClick = this.handleLaunchClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
  }

  get activeViewComponent() {
    const { viewName } = this.state;

    switch (viewName) {
      case 'list':
        return (
          <LaunchesList
            launches={this.state.launchesList}
            onLaunchClick={this.handleLaunchClick}
          />
        );

      case 'details':
        return (
          <LaunchDetails
            launch={this.state.actvieLaunch}
            launchSite={this.state.activeLaunchPad}
            rocket={this.state.activeRocket}
            onBackClick={this.handleBackClick}
          />
        );

      default: return null;
    }
  }

  handleLaunchClick(key) {
    this.setState({isLoading: true});
    getLaunchByNumber(key).then(launch => {
      if(launch && launch.length >0 ){
        this.setState({ 
          actvieLaunch: launch[0]
        })
        getRocketById(launch[0].rocket.rocket_id).then(rocket => {
          this.setState({ 
            activeRocket: rocket
          })
        })
        getLaunchpadById(launch[0].launch_site.site_id).then(pad => {
          this.setState({ 
            viewName: 'details',
            isLoading: false,
            activeLaunchPad: pad
          })
        })
      } else {
        this.setState({ 
          viewName: 'details',
          isLoading: false,
        })
      }
    })
  }

  handleBackClick() {
    this.setState({ viewName: 'list' });
  }

  render() {
    return (
      <main className='page-container'>
      {this.state.isLoading ? 
        <div className='page-content'>
          <Loading/>
        </div> : 
        <div>
          <div className='page-content'>
            {this.activeViewComponent}
          </div>
          <PageFooter />
        </div>}

      </main>
    );
  }
}

export default hot(module)(App);
