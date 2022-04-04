import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemes from './Utils/Common/MuiThemes';
import reportWebVitals from './reportWebVitals';
import Router from './Routes/routes';
import { BrowserRouter } from 'react-router-dom';
import './styles/index.css';

import AuthContext from './Contexts/Auth';

ReactDOM.render(
	<BrowserRouter>
		<MuiThemes>
			<AuthContext.Provider>
				<Router />
			</AuthContext.Provider>
		</MuiThemes>
	</BrowserRouter>,
	document.getElementById('root')
);
reportWebVitals();
