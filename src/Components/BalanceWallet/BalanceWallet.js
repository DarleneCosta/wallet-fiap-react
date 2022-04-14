import { useState } from 'react';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline';

export default function Saldo({ value }) {
	const [isVisible, setIsVisible] = useState(false);
	return (
		<>
			<div className="flex justify-center items-center content-between w-full">
				<p className="text-xs dark:text-white font-semibold w-full">
					Acumulado R$
				</p>
				<div className="flex items-center content-center">
					<div
						className={`text-md flex items-center text-black font-extrabold mr-8 ${
							isVisible ? null : 'translate-y-0.5'
						}`}
						style={{ width: '150px' }}
					>
						{isVisible ? value.toFixed(2) : '***'}
					</div>
					<div>
						<button
							className="text-sm p-1 text-gray-800 mr-4"
							onClick={() => setIsVisible(!isVisible)}
						>
							{isVisible ? (
								<EyeIcon
									className="ml-1 mr-1 h-5 w-5"
									aria-hidden="true"
								/>
							) : (
								<EyeOffIcon
									className="ml-1 mr-1 h-5 w-5"
									aria-hidden="true"
								/>
							)}
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
