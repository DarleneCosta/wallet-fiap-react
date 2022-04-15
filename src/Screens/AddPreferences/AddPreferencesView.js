import { Fragment } from 'react';
import { Dialog, Transition, Listbox } from '@headlessui/react';
import { PlusIcon } from '@heroicons/react/outline';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function DialogAddPreferences({
	handleClickYes,
	cancelButtonRef,
	handleClickOpen,
	open,
	setOpen,
	selected,
	setSelected,
	stores
}) {
	return (
		<>
			<div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
				<button
					onClick={handleClickOpen}
					className="bg-yellow-500 flex items-center p-4 transition ease-in duration-200 uppercase rounded-full hover:bg-yellow-800 hover:text-white fixed"
				>
					<PlusIcon
						className="h-6 w-6 text-white"
						aria-hidden="true"
					/>
				</button>
			</div>
			{open ? (
				<Transition.Root show={open} as={Fragment}>
					<Dialog
						as="div"
						className="fixed z-10 inset-0 overflow-y-auto"
						initialFocus={cancelButtonRef}
						onClose={setOpen}
					>
						<div className="flex items-end justify-center pt-4 px-4 pb-20 text-center sm:block sm:p-0">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0"
								enterTo="opacity-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100"
								leaveTo="opacity-0"
							>
								<Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
							</Transition.Child>

							<span
								className="hidden sm:inline-block sm:align-middle sm:h-screen"
								aria-hidden="true"
							>
								&#8203;
							</span>
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
								enterTo="opacity-100 translate-y-0 sm:scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 translate-y-0 sm:scale-100"
								leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							>
								<div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
									<div
										className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"
										style={{ height: '180px' }}
									>
										<div className="sm:flex sm:items-start">
											<div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
												<Dialog.Title
													as="h3"
													className="text-lg leading-6 font-medium text-gray-900 pb-2"
												>
													Adicionar em sua lista?
												</Dialog.Title>
												<Listbox
													value={selected}
													onChange={setSelected}
												>
													{({ open }) => (
														<>
															<div className="mt-1 relative z-0">
																<Listbox.Button className="relative w-full  bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
																	<span className="flex items-center">
																		<img
																			src={
																				selected.urlLogo
																			}
																			alt=""
																			className="flex-shrink-0 h-6 w-6 rounded-full"
																		/>
																		<span className="ml-3 block truncate">
																			{
																				selected.name
																			}{' '}
																			-{' '}
																			{
																				selected.percent
																			}{' '}
																			%
																		</span>
																	</span>
																	<span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
																		<SelectorIcon
																			className="h-5 w-5 text-gray-400"
																			aria-hidden="true"
																		/>
																	</span>
																</Listbox.Button>

																<Transition
																	show={open}
																	as={
																		Fragment
																	}
																	leave="transition ease-in duration-100"
																	leaveFrom="opacity-100"
																	leaveTo="opacity-0"
																>
																	<Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
																		{stores.map(
																			(
																				store
																			) => (
																				<Listbox.Option
																					key={
																						store.id
																					}
																					className={({
																						active
																					}) =>
																						classNames(
																							active
																								? 'text-white bg-indigo-600'
																								: 'text-gray-900',
																							'cursor-default select-none relative py-2 pl-3 pr-9'
																						)
																					}
																					value={
																						store
																					}
																				>
																					{({
																						selected,
																						active
																					}) => (
																						<>
																							<div className="flex items-center">
																								<img
																									src={
																										store.urlLogo
																									}
																									alt=""
																									className="flex-shrink-0 h-6 w-6 rounded-full"
																								/>
																								<span
																									className={classNames(
																										selected
																											? 'font-semibold'
																											: 'font-normal',
																										'ml-3 block truncate'
																									)}
																								>
																									{
																										store.name
																									}{' '}
																									-{' '}
																									{
																										store.percent
																									}

																									%
																								</span>
																							</div>

																							{selected ? (
																								<span
																									className={classNames(
																										active
																											? 'text-white'
																											: 'text-indigo-600',
																										'absolute inset-y-0 right-0 flex items-center pr-4'
																									)}
																								>
																									<CheckIcon
																										className="h-5 w-5"
																										aria-hidden="true"
																									/>
																								</span>
																							) : null}
																						</>
																					)}
																				</Listbox.Option>
																			)
																		)}
																	</Listbox.Options>
																</Transition>
															</div>
														</>
													)}
												</Listbox>
											</div>
										</div>
									</div>
									<div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
										<button
											type="button"
											className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-yellow-600 text-base font-medium text-white hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 sm:ml-3 sm:w-auto sm:text-sm"
											onClick={handleClickYes}
										>
											Sim
										</button>
										<button
											type="button"
											className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
											onClick={() => setOpen(false)}
											ref={cancelButtonRef}
										>
											Não
										</button>
									</div>
								</div>
							</Transition.Child>
						</div>
					</Dialog>
				</Transition.Root>
			) : (
				<div />
			)}
		</>
	);
}
