import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';

const textFieldClasses =
  'dark:bg-slate-900 block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6';

const labelClasses = 'block text-sm font-semibold leading-6';

export default function Example() {
  return (
    <form
      action="#"
      method="POST"
      className="px-6 pb-24 sm:pb-32 lg:px-8 lg:py-48"
    >
      <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className={labelClasses}>
              First name
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className={textFieldClasses}
              />
            </label>
          </div>
          <div>
            <label htmlFor="last-name" className={labelClasses}>
              Last name
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className={textFieldClasses}
              />
            </label>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className={labelClasses}>
              Email
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className={textFieldClasses}
              />
            </label>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className={labelClasses}>
              Phone number
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                autoComplete="tel"
                className={textFieldClasses}
              />
            </label>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className={labelClasses}>
              Message
              <textarea
                name="message"
                id="message"
                rows={4}
                className={textFieldClasses}
                defaultValue=""
              />
            </label>
            <div className="mt-2.5" />
          </div>
        </div>
        <div className="mt-8 flex justify-end">
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Send message
          </button>
        </div>
      </div>
    </form>
  );
}
