import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Router from './routes';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.css';

import AuthContext from './contexts/Auth';

ReactDOM.render(
	<BrowserRouter>
		<AuthContext.Provider value={{signed:true}} >
			<Router />
		</AuthContext.Provider>
	</BrowserRouter>,
	document.getElementById('root')
);
reportWebVitals();
