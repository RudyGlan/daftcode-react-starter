import { hot } from 'react-hot-loader';
import * as React from 'react';

import LaunchDetails from './view/LaunchDetails';
import LaunchesList from './view/LaunchesList';
import PageFooter from './components/structure/PageFooter';
import Loading from './components/general/Loading';
import {getLaunchByNumber, getAllLaunches, getRocketById, getLaunchpadById} from './components/general/SpacexApi'

import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';

import { Provider } from 'mobx-react';
import './styles/theme.sass';

@inject('MainStore')
@observer
class App extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
  }

  get activeViewComponent() {
    const { MainStore } = this.props;

    switch (MainStore.currentViewName) {
      case 'list':
        return (
          <Provider MainStore = {MainStore}> 
            <LaunchesList />
          </Provider>
        );

      case 'details':
        return (
            <LaunchDetails />
        );

      default: return null;
    }
  }

  render() {
    return (
      <main className='page-container'>
      {this.props.MainStore.listState.isLoading ? 
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
