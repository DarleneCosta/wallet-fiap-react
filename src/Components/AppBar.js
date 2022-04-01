import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import Auth from '../Services/APIs/Auth/Auth';

export default function ButtonAppBar() {
	const navigate = useNavigate();

	const loggout = () => {
		Auth.deleteToken();
		navigate('/SignIn');
	};

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static" color="secondary">
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						Wallet
					</Typography>
					<Button color="inherit" onClick={loggout}>
						Sair
					</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
