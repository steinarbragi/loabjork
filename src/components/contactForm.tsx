/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';

const textFieldClasses =
  'dark:bg-slate-900 block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6';

export default function Example() {
  return (
    <div>
      <div className="relative z-0">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-200">
                Get in touch
              </h2>
              <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600 dark:text-gray-400">
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Address</span>
                    <BuildingOffice2Icon
                      className="h-7 w-6 text-gray-400 dark:text-gray-200"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    Miðgarður 1A
                    <br />
                    700 Egilsstaðir
                    <br />
                    ICELAND
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Telephone</span>
                    <PhoneIcon
                      className="h-7 w-6 text-gray-400 dark:text-gray-200"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <a
                      className="hover:text-gray-900 dark:hover:text-gray-100"
                      href="tel:+1 (555) 234-5678"
                    >
                      +354 864-2391
                    </a>
                  </dd>
                </div>
                <div className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <EnvelopeIcon
                      className="h-7 w-6 text-gray-400 dark:text-gray-200"
                      aria-hidden="true"
                    />
                  </dt>
                  <dd>
                    <a
                      className="hover:text-gray-900 dark:hover:text-gray-100"
                      href="mailto:hello@example.com"
                    >
                      loabjorkbraga@gmail.com
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <form
            action="#"
            method="POST"
            className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
          >
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-semibold leading-6"
                  >
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
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-semibold leading-6"
                  >
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
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6"
                  >
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
                  <label
                    htmlFor="phone-number"
                    className="block text-sm font-semibold leading-6"
                  >
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
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold leading-6"
                  >
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
        </div>
      </div>
    </div>
  );
}
