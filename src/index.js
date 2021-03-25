import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//external services
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'; 
import rootReducer from './reducers/rootReducer';

import * as serviceWorker from './serviceWorker';
//import 'semantic-ui-css/semantic.min.css';
const store = createStore(
	rootReducer,
	composeWithDevTools(
		applyMiddleware(thunk)
	)
)

// 
if(localStorage.jwt) {
	console.log('localStorage test')
	const jwt = JSON.parse(localStorage.jwt);
	store.dispatch({type: 'SET_LOGIN', value: jwt});
}

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
