import { InformationCircleIcon } from '@heroicons/react/outline';
export default function Alert({ title, subTitle = '' }) {
	if (title)
		return (
			<div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 rounded-md">
				<div className="sm:flex sm:items-start">
					<div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
						<InformationCircleIcon
							className="h-6 w-6 text-amber-600 solid"
							aria-hidden="true"
						/>
					</div>
					<div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
						<h3 className="text-lg leading-6 font-medium text-gray-900">
							{title}
						</h3>
						<div className="mt-2">
							<p className="text-sm text-gray-500">{subTitle}</p>
						</div>
					</div>
				</div>
			</div>
		);
	else return <></>;
}
