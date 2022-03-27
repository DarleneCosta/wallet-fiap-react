import * as React from 'react';

import {
	Avatar,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Slide
} from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import ClearIcon from '@mui/icons-material/Clear';

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const DialogDelete = () => {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	return (
		<div>
			<Avatar
				onClick={handleClickOpen}
				variant="rounded"
				sx={{
					width: 16,
					height: 16,
					borderRadius: '5px',
					bgcolor: deepOrange[500],
					ml: 2
				}}
			>
				<ClearIcon fontSize="small" color="inherit" />
			</Avatar>

			<Dialog
				open={open}
				TransitionComponent={Transition}
				keepMounted
				onClose={handleClose}
				aria-describedby="alert-dialog-slide-description"
			>
				<DialogTitle>{'Confirma exclusão?'}</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-slide-description">
						Retira a empresa da sua lista?
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>NÃO</Button>
					<Button onClick={handleClose}>SIM</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default DialogDelete;
