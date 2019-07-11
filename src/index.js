import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// Import the ThemeProvider
import { ThemeProvider } from "flwww";

// Changing the colors
const theme = {
	primaryColor: "#29bb66",
};


ReactDOM.render(
	<ThemeProvider theme={ theme }>
		<App />
	</ThemeProvider>
, document.getElementById('root'));


serviceWorker.unregister();
