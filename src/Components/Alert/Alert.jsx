/* This example requires Tailwind CSS v2.0+ */
import { PaperClipIcon } from '@heroicons/react/solid';
import { ExclamationIcon, XIcon } from '@heroicons/react/outline';
export default function Example() {
	return (
		<div className="bg-white shadow overflow-hidden sm:rounded-lg">
			<div className="px-4 py-5 sm:px-6">
				<h3 className="text-lg leading-6 font-medium text-gray-900">
					Applicant Information
				</h3>
				<p className="mt-1 max-w-2xl text-sm text-gray-500">
					Personal details and application.
				</p>
			</div>
		</div>
	);
}
