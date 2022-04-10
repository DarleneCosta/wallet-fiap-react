import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Router from './Routes';
import { BrowserRouter } from 'react-router-dom';
import './Styles/index.css';

import { AuthProvider } from './Contexts/Auth';

ReactDOM.render(
	<BrowserRouter>
		<AuthProvider>
			<Router />
		</AuthProvider>
	</BrowserRouter>,
	document.getElementById('root')
);
reportWebVitals();
