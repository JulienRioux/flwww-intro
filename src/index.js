import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// Import the ThemeProvider
import { ThemeProvider } from "flwww";

// Changing the colors
const theme = {
	defaultColor: "#7a00ff",
};


ReactDOM.render(
	<ThemeProvider theme={ theme }>
		<App />
	</ThemeProvider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
