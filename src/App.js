import { hot } from 'react-hot-loader';
import * as React from 'react';

import LaunchDetails from './view/LaunchDetails';
import LaunchesList from './view/LaunchesList';
import PageFooter from './components/structure/PageFooter';
import Loading from './components/general/Loading';
import {getLaunchByNumber, getAllLaunches, getRocketById, getLaunchpadById} from './components/general/SpacexApi'

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
      isLoading: false,
      isError: false,
      errorStatus: ''
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
            errorStatus={this.state.errorStatus}
            isError={this.state.isError}
          />
        );

      default: return null;
    }
  }

  async handleLaunchClick(num) {
    this.setState({isLoading: true});
    let error;
    let launch, rocket, pad;
    launch = await getLaunchByNumber(num);
    if(launch.status >= 300){
      this.setState({ 
        viewName: 'details',
        isLoading: false,
        isError: true,
        errorStatus: `${launch.status} (launch)`
      })
      return;
    }
    if (launch.data.length > 0) {
      rocket = await getRocketById(launch.data[0].rocket.rocket_id);
      if(rocket.status >= 300){
        this.setState({ 
          viewName: 'details',
          isLoading: false,
          isError: true,
          errorStatus: `${rocket.status} (rocket)`
        })
        return;
      }
      pad = await getLaunchpadById(launch.data[0].launch_site.site_id);
      if(pad.status >= 300){
        this.setState({ 
          viewName: 'details',
          isLoading: false,
          isError: true,
          errorStatus: `${pad.status} (pad)`
        })
        return;
      }
    } else {
      this.setState({ 
        viewName: 'details',
        isLoading: false,
        isError: true,
        errorStatus: 'wrong data'
      })
      return;
    }

    this.setState({
      viewName: 'details',
      isLoading: false,
      isError: false,
      errorStatus: '',
      actvieLaunch: launch.data[0],
      activeRocket: rocket.data,
      activeLaunchPad: pad.data
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
