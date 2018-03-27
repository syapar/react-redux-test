import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app/App.jsx';
import { Provider } from 'react-redux';

import configureStore from './utils/configureStore';

const store = configureStore();

ReactDOM.render(
	<div>
		<Provider store={store}>
			<App />
		</Provider>
	</div>
	, document.getElementById('root')
);