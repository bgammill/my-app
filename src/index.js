import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BasicExample from './BasicExample';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<div><BasicExample /></div>, document.getElementById('root'));
registerServiceWorker();
