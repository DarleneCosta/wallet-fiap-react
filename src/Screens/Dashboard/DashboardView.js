import React, { useEffect } from 'react';
import SaldoCarteira from '../../components/SaldoCarteira/SaldoCarteira';
import DialogRemove from '../../components/DialogRemove/DialogRemove';
import DialogAddFavorito from '../../components/DialogAddFavorito/DialogAddFavorito';
import AppBar from '../../components/AppBar/AppBar';
// assets

import './Dashboard.css';
import { useNavigate } from 'react-router-dom';

const DashboardView = ({ userIsLogged }) => {
	const navigate = useNavigate();
	var userSession = localStorage.getItem('@wallet:session');
	console.log(userSession);
	useEffect(() => {
		if (!userIsLogged) {
			navigate('/');
		}
	});

	return (
		<div className="h-full bg-gray-100">
			<AppBar />

			<div className="lg:text-center bg-blue-500 ">
				<div className="hidden md:block">
					<hr className="mx-3" />
					<div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-sm font-medium text-white bg-blue-500 py-2">
							Olá, Fulano da Silva
						</dt>
						<dd className="bg-gray-100 py-2 px-3 text-sm text-gray-900 sm:col-span-2 rounded-md flex items-center justify-between">
							<SaldoCarteira />
						</dd>
					</div>
				</div>
				<div className="md:hidden">
					<h2 className="text-base text-white font-semibold tracking-wide px-5 pt-2">
						Olá, Fulano da Silva
					</h2>
					<div className="py-3 px-10 bg-gray-100 dark:bg-gray-800 text-gray-600 border-blue-500 flex items-center justify-between mt-2">
						<SaldoCarteira />
					</div>
				</div>
			</div>

			<div className="lg:text-center bg-blue-500 p-5">
				<p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
					Suas lojas favoritas
				</p>
			</div>

			<div className="w-auto flex flex-col px-8 py-5 justify-center bg-gray-100 ">
				<ul className="flex flex-col">
					{[1, 2, 3].map((value) => (
						<li
							key={value}
							className="border-gray-400 flex flex-row mb-2"
						>
							<div className="shadow border select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-5 px-12">
								<div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
									<img
										alt="profil"
										src="/images/person/6.jpg"
										className="mx-auto object-cover rounded-full h-10 w-10 "
									/>
								</div>
								<div className="flex-1 pl-5 md:mr-16">
									<div className="font-medium dark:text-white">
										Jean Marc {value}
									</div>
								</div>
								<div className="text-gray-600 dark:text-gray-200 text-xs md:mr-20">
									6:00 AM
								</div>
								<div className="w-24 text-right flex justify-end">
									<DialogRemove />
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
			<DialogAddFavorito className="fixed" />
		</div>
	);
};

export default DashboardView;
