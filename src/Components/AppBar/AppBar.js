import { Disclosure } from '@headlessui/react';
import { MenuIcon } from '@heroicons/react/outline';
import walletImage from '../../Assets/ico_wallet.png';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

const AppBar = ({ signOut }) => {
	
	const navigation = [
		{ name: 'Favoritas', current: true },
		{ name: 'Carteira', current: false },
		{ name: 'Lojas', current: false },
		{ name: 'Quem somos', current: false },
		{ name: 'Sair', current: false }
	];

	return (
		<>
			<Disclosure as="nav" className="bg-blue-500">
				{({ open }) => (
					<>
						<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
							<div className="flex items-center justify-between h-16">
								<div className="flex items-center">
									<div className="flex-shrink-0">
										<img
											className="h-8 w-8"
											src={walletImage}
											alt="Workflow"
										/>
									</div>
									<div className="hidden md:block">
										<div className="ml-10 flex items-baseline space-x-4">
											{navigation.map((item) => (
												<button
													key={item.name}
													className={classNames(
														item.current
															? 'bg-yellow-500 text-white'
															: 'text-yellow-300 hover:bg-yellow-700 hover:text-white',
														'px-3 py-2 rounded-md text-sm font-medium'
													)}
													aria-current={
														item.current
															? 'page'
															: undefined
													}
													onClick={() => {
														if (
															item.name === 'Sair'
														)
															signOut();
													}}
												>
													{item.name}
												</button>
											))}
										</div>
									</div>
								</div>

								<div className="-mr-2 flex md:hidden">
									<Disclosure.Button className="bg-yellow-500 inline-flex items-center justify-center p-2 rounded-full text-black hover:text-white hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-yellow-800 focus:ring-white">
										<MenuIcon
											className="h-6 w-6 text-white"
											aria-hidden="true"
										/>
									</Disclosure.Button>
								</div>
							</div>
						</div>

						<Disclosure.Panel className="md:hidden">
							<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
								{navigation.map((item) => (
									<Disclosure.Button
										key={item.name}
										as="a"
										href={item.href}
										className={classNames(
											item.current
												? 'bg-yellow-500 text-white'
												: 'text-yellow-300 hover:bg-yellow-700 hover:text-white',
											'block px-3 py-2 rounded-md text-base font-medium'
										)}
										aria-current={
											item.current ? 'page' : undefined
										}
									>
										{item.name}
									</Disclosure.Button>
								))}
							</div>
						</Disclosure.Panel>
					</>
				)}
			</Disclosure>
		</>
	);
};

export default AppBar;
