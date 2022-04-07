import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Router from './routes';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.css';

import { AuthProvider } from './contexts/Auth';

ReactDOM.render(
	<BrowserRouter>
		<AuthProvider>
			<Router />
		</AuthProvider>
	</BrowserRouter>,
	document.getElementById('root')
);
reportWebVitals();
