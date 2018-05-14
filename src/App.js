import { hot } from 'react-hot-loader';
import * as React from 'react';

import launch from './assets/sample_json/launch.json';
import launchSite from './assets/sample_json/launch_site.json';
import rocket from './assets/sample_json/rocket.json';
import launches from './assets/sample_json/launches.json';

import LaunchDetails from './view/LaunchDetails';
import LaunchesList from './view/LaunchesList';
import PageFooter from './components/structure/PageFooter';

import './styles/theme.sass';

class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      viewName: 'list',
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
            launches={launches}
            onLaunchClick={this.handleLaunchClick}
          />
        );

      case 'details':
        return (
          <LaunchDetails
            launch={launch}
            launchSite={launchSite}
            rocket={rocket}
            onBackClick={this.handleBackClick}
          />
        );

      default: return null;
    }
  }

  handleLaunchClick() {
    this.setState({ viewName: 'details' });
  }

  handleBackClick() {
    this.setState({ viewName: 'list' });
  }

  render() {
    return (
      <main className='page-container'>
        <div className='page-content'>
          {this.activeViewComponent}
        </div>
        <PageFooter />
      </main>
    );
  }
}

export default hot(module)(App);
