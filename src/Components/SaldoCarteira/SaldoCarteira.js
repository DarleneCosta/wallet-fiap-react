import { Fragment, useRef, useState } from 'react';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline';

export default function Saldo() {
	const [isVisible, setIsVisible] = useState(false);
	return (
		<>
			<p className="text-xs flex items-center dark:text-white font-semibold ">
				Acumulado R$
			</p>
			<div className="text-md flex items-center text-black font-extrabold">
				{isVisible ? '100,00' : '***'}
			</div>
			<div className="flex items-center">
				<button
					className="text-sm p-1 text-gray-800 mr-4"
					onClick={() => setIsVisible(!isVisible)}
				>
					<EyeIcon className="ml-1 mr-1 h-5 w-5" aria-hidden="true" />
				</button>
			</div>
		</>
	);
}
