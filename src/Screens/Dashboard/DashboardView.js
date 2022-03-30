import React from 'react';

import {
	Avatar,
	Box,
	Card,
	CardContent,
	CircularProgress,
	Divider,
	Grid,
	Typography
} from '@mui/material';
import loginImg from '../../Assets/img_login_new.png';

import DialogRemove from '../../Components/DialogRemove/DialogRemove';
import AppBar from '../../Components/AppBar.js';
// assets

import './Dashboard.css';

const HomeView = () => {
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

					<Box className="store">
						<CardContent>
							{[1, 2, 3].map((value) => (
								<Card container key={value} className="item-store">
									<Grid item xs={12}>
										<Grid container direction="column">
											<Grid item>
												<Grid
													container
													direction="row"
													justifyContent="flex-start"
													alignItems="center"
												>
													<Grid item xs={2} md={2} paddingLeft={2}>
														<Avatar
															variant="rounded"
															src={loginImg}
														></Avatar>
													</Grid>
													<Grid item xs={4} md={4}>
														<Typography
															variant="subtitle1"
															color="inherit"
														>
															Bajaj Finery {value}
														</Typography>
													</Grid>
													<Grid item xs={5} md={5}>
														<Grid
															container
															alignItems="center"
															justifyContent="space-between"
														>
															<Grid item>
																<Typography
																	variant="subtitle1"
																	color="inherit"
																>
																	10%
																</Typography>
															</Grid>
														</Grid>
													</Grid>
													<Grid item md={1}>
														<DialogRemove />
													</Grid>
												</Grid>
											</Grid>
										</Grid>

										{/* <Divider sx={{ my: 1.5 }} /> */}
									</Grid>
								</Card>
							))}
						</CardContent>
					</Box>
				</>
			)}
		</>
	);
};

export default HomeView;
