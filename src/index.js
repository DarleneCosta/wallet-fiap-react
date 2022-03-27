import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemes from './Utils/Common/MuiThemes';
import reportWebVitals from './reportWebVitals';
import Router from './Routes/routes';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

ReactDOM.render(
	<BrowserRouter>
		<MuiThemes>
			<Router />
		</MuiThemes>
	</BrowserRouter>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
