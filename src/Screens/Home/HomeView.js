import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Home.css';
import walletImage from '../../assets/wallet2.png';

const HomeView = () => {
	const navigate = useNavigate();

	return (
		<div className="h-screen flex flex-col xl:flex-row">
			<div
				id="HomeMessage"
				className="bg-blue-500 h-3/4 w-screen flex flex-col justify-center items-center xl:h-screen xl:w-2/4"
			>
				<span className="text-white text-center mb-8 font-bold text-xl mt-28 ml-2 mr-2 xl:text-2xl">
					Seja bem-vindo à sua carteira digital!
				</span>
				<span className="text-white text-center font-bold text-xl ml-2 mr-2 xl:text-2xl">
					Aqui você compra em suas lojas favoritas e ganha na hora cashback em sua
					carteira!
				</span>
				<img className="mt-24 w-16 h-16" src={walletImage} alt="Logo de um carteira" />
			</div>
			<div
				id="Buttons"
				className="bg-slate-200 h-1/4 flex justify-center items-center flex-col xl:h-screen xl:w-2/4"
			>
				<button
					onClick={() => navigate('/SignIn')}
					className="w-3/4 bg-white rounded-xl h-10 text-xl font-medium mb-6 xl:h-16 xl:font-normal xl:text-xl"
				>
					Já sou cadastrado
				</button>
				<button
					onClick={() => navigate('/SignUp')}
					className="w-3/4 bg-yellow-500 rounded-xl text-xl font-semibold text-white h-10 xl:font-bold xl:text-xl xl:h-16"
				>
					Quero me cadastrar
				</button>
			</div>
		</div>
	);
};

export default HomeView;
