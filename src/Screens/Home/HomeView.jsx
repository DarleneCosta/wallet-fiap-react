import React from 'react';

import {
	Avatar,
	Button,
	Box,
	Card,
	CardActions,
	CardContent,
	CircularProgress,
	Container,
	Divider,
	Grid,
	Menu,
	MenuItem,
	Typography
} from '@mui/material';

// assets

import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

import './Home.css';

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
								<Typography variant="h4" color="white">
									Lojas Favoritas
								</Typography>
							</Grid>
						</Grid>
					</Box>
					<Container fixed margin={0}>
						<Card content>
							<CardContent>
								<Grid container>
									<Grid item xs={12} sx={{ pt: '16px !important' }}></Grid>
									<Grid item xs={12}>
										<Grid container direction="column">
											<Grid item>
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
															Bajaj Finery
														</Typography>
													</Grid>
													<Grid item>
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
																	$1839.00
																</Typography>
															</Grid>
															<Grid item>
																<Avatar
																	variant="rounded"
																	sx={{
																		width: 16,
																		height: 16,
																		borderRadius: '5px',

																		ml: 2
																	}}
																>
																	<KeyboardArrowUpOutlinedIcon
																		fontSize="small"
																		color="inherit"
																	/>
																</Avatar>
															</Grid>
														</Grid>
													</Grid>
												</Grid>
											</Grid>
											<Grid item>
												<Typography
													variant="subtitle2"
													//sx={{ color: 'success.dark' }}
												>
													10% Profit
												</Typography>
											</Grid>
										</Grid>
										<Divider sx={{ my: 1.5 }} />
										<Grid container direction="column">
											<Grid item>
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
															TTML
														</Typography>
													</Grid>
													<Grid item>
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
																	$100.00
																</Typography>
															</Grid>
															<Grid item>
																<Avatar
																	variant="rounded"
																	sx={{
																		width: 16,
																		height: 16,
																		borderRadius: '5px',

																		marginLeft: 1.875
																	}}
																>
																	<KeyboardArrowDownOutlinedIcon
																		fontSize="small"
																		color="inherit"
																	/>
																</Avatar>
															</Grid>
														</Grid>
													</Grid>
												</Grid>
											</Grid>
											<Grid item>
												<Typography
													variant="subtitle2"
													//sx={{ color: theme.palette.orange.dark }}
												>
													10% loss
												</Typography>
											</Grid>
										</Grid>
										<Divider sx={{ my: 1.5 }} />
										<Grid container direction="column">
											<Grid item>
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
															Reliance
														</Typography>
													</Grid>
													<Grid item>
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
																	$200.00
																</Typography>
															</Grid>
															<Grid item>
																<Avatar
																	variant="rounded"
																	sx={{
																		width: 16,
																		height: 16,
																		borderRadius: '5px',

																		ml: 2
																	}}
																>
																	<KeyboardArrowUpOutlinedIcon
																		fontSize="small"
																		color="inherit"
																	/>
																</Avatar>
															</Grid>
														</Grid>
													</Grid>
												</Grid>
											</Grid>
											<Grid item>
												<Typography
													variant="subtitle2"
													//sx={{ color: theme.palette.success.dark }}
												>
													10% Profit
												</Typography>
											</Grid>
										</Grid>
										<Divider sx={{ my: 1.5 }} />
										<Grid container direction="column">
											<Grid item>
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
															TTML
														</Typography>
													</Grid>
													<Grid item>
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
																	$189.00
																</Typography>
															</Grid>
															<Grid item>
																<Avatar
																	variant="rounded"
																	sx={{
																		width: 16,
																		height: 16,
																		borderRadius: '5px',

																		ml: 2
																	}}
																>
																	<KeyboardArrowDownOutlinedIcon
																		fontSize="small"
																		color="inherit"
																	/>
																</Avatar>
															</Grid>
														</Grid>
													</Grid>
												</Grid>
											</Grid>
											<Grid item>
												<Typography
													variant="subtitle2"
													// sx={{ color: theme.palette.orange.dark }}
												>
													10% loss
												</Typography>
											</Grid>
										</Grid>
										<Divider sx={{ my: 1.5 }} />
										<Grid container direction="column">
											<Grid item>
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
															Stolon
														</Typography>
													</Grid>
													<Grid item>
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
																	$189.00
																</Typography>
															</Grid>
															<Grid item>
																<Avatar
																	variant="rounded"
																	sx={{
																		width: 16,
																		height: 16,
																		borderRadius: '5px',

																		ml: 2
																	}}
																>
																	<KeyboardArrowDownOutlinedIcon
																		fontSize="small"
																		color="inherit"
																	/>
																</Avatar>
															</Grid>
														</Grid>
													</Grid>
												</Grid>
											</Grid>
											<Grid item>
												<Typography
													variant="subtitle2"
													//sx={{ color: theme.palette.orange.dark }}
												>
													10% loss
												</Typography>
											</Grid>
										</Grid>
									</Grid>
								</Grid>
							</CardContent>
						</Card>
					</Container>
				</>
			)}
		</>
	);
};

export default HomeView;
