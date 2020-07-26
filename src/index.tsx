import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './Containers/App/index';

var mountNode = document.getElementById('app');
ReactDOM.render(<App name="fresh-project" />, mountNode);
