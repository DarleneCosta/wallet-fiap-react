import React, { useEffect } from 'react';

import { Avatar, Box, Card, CardContent, CircularProgress, Grid, Typography } from '@mui/material';
import SignInImg from '../../Assets/img_login_new.png';
import { XIcon } from '@heroicons/react/outline';
import DialogRemove from '../../Components/DialogRemove/DialogRemove';
import AppBar from '../../Components/AppBar/AppBar.js';
// assets

import './Dashboard.css';
import { useNavigate } from 'react-router-dom';

const HomeView = ({ userIsLogged }) => {
	const navigate = useNavigate();

	// useEffect(() => {
	// 	if (!userIsLogged) {
	// 		navigate('/');
	// 	}
	// }, []);

	const isLoading = false;

	return (
		<>
			{isLoading ? (
				<Grid container direction="row" justifyContent="center" alignItems="center">
					<CircularProgress />
				</Grid>
			) : (
				<>
					<AppBar />
					<Box // sx={{ display: { xs: 'block', md: 'block' } }}
						display="block"
					>
						<Grid
							height={100}
							container
							alignContent="center"
							justifyContent="space-between"
						>
							<Grid item>
								<Typography variant="h5" color="white" marginLeft={3}>
									Minhas lojas favoritas
								</Typography>
							</Grid>
						</Grid>
					</Box>

					<div class="container w-auto flex flex-col mx-8 my-3  justify-center">
						<ul class="flex flex-col">
							{[1, 2, 3].map((value) => (
								<li key={value} class="border-gray-400 flex flex-row mb-2">
									<div class="shadow border select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-5 pl-6">
										<div class="flex flex-col w-10 h-10 justify-center items-center mr-4">
											<img
												alt="profil"
												src="/images/person/6.jpg"
												class="mx-auto object-cover rounded-full h-10 w-10 "
											/>
										</div>
										<div class="flex-1 pl-5 md:mr-16">
											<div class="font-medium dark:text-white">
												Jean Marc {value}
											</div>
										</div>
										<div class="text-gray-600 dark:text-gray-200 text-xs md:mr-20">
											6:00 AM
										</div>
										<div class="w-24 text-right flex justify-end">
											<DialogRemove />
										</div>
									</div>
								</li>
							))}
						</ul>
					</div>
				</>
			)}
		</>
	);
};

export default HomeView;
