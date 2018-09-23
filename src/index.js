import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import TransitionGroup from 'react-addons-transition-group'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
        <App/>, document.getElementById('root'));
registerServiceWorker();
