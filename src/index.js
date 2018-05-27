import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/favicon.ico';
import { Provider } from 'mobx-react';
import MainStore from './stores/MainStore'

ReactDOM.render(<Provider MainStore={MainStore}><App /></Provider>, document.getElementById('root'));
