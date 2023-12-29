'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

const textFieldClasses =
  'dark:bg-slate-900 block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6';

const labelClasses = 'block text-sm font-semibold leading-6';

type Inputs = {
  name: string;
  email: string;
  phone: string;
  message: string;
  subject: string;
  access_key: string;
  botcheck: string;
};

export default function Example() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<Inputs>({ mode: 'onTouched' });

  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState('');

  const onSubmit: SubmitHandler<Inputs> = async (data, e) => {
    await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data, null, 2),
    })
      .then(async response => {
        const json = await response.json();
        if (json.success) {
          setIsSuccess(true);
          setMessage(json.message);
          e?.target.reset();
          reset();
        } else {
          setIsSuccess(false);
          setMessage(json.message);
        }
      })
      .catch(error => {
        setIsSuccess(false);
        setMessage('Client Error. Please check the console.log for more info');
        // eslint-disable-next-line no-console
        console.log(error);
      });
  };
  const t = useTranslations('contact');
  return (
    <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
      {!isSubmitSuccessful && (
        <form
          action="#"
          onSubmit={handleSubmit(onSubmit)}
          method="POST"
          className="px-6 pb-24 sm:pb-32 lg:px-8 lg:py-48"
        >
          <input
            type="hidden"
            value="
            b80d5198-95ac-4522-8a39-a6fbfe9087d7"
            {...register('access_key')}
          />
          <input
            type="hidden"
            value="Message from website"
            {...register('subject')}
          />
          <input
            type="checkbox"
            id=""
            className="hidden"
            style={{ display: 'none' }}
            {...register('botcheck')}
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className={labelClasses}>
                {t('name')}
                {errors.name && <span>{t('required')}</span>}
                <input
                  type="text"
                  id="firstName"
                  autoComplete="given-name"
                  className={textFieldClasses}
                  {...register('name', { required: true })}
                />
              </label>
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="phone" className={labelClasses}>
                {t('phone')}
                <input
                  type="tel"
                  id="phone"
                  autoComplete="tel"
                  className={textFieldClasses}
                  {...register('phone')}
                />
              </label>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className={labelClasses}>
                {t('email')}
                {errors.email && <span>{t('required')}</span>}
                <input
                  type="email"
                  id="email"
                  autoComplete="email"
                  className={textFieldClasses}
                  {...register('email', { required: true })}
                />
              </label>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className={labelClasses}>
                {t('message')}
                {errors.message && <span>{t('required')}</span>}
                <textarea
                  id="message"
                  rows={4}
                  className={textFieldClasses}
                  defaultValue=""
                  {...register('message', { required: true })}
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
              {t('send')}
            </button>
          </div>
        </form>
      )}
      {isSubmitSuccessful && isSuccess && (
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="lg:mt-40 text-center text-white rounded-md">
            <svg
              width="100"
              height="100"
              className="text-green-300"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.6666 50L46.6666 66.6667L73.3333 33.3333M50 96.6667C43.8716 96.6667 37.8033 95.4596 32.1414 93.1144C26.4796 90.7692 21.3351 87.3317 17.0017 82.9983C12.6683 78.6649 9.23082 73.5204 6.8856 67.8586C4.54038 62.1967 3.33331 56.1283 3.33331 50C3.33331 43.8716 4.54038 37.8033 6.8856 32.1414C9.23082 26.4796 12.6683 21.3351 17.0017 17.0017C21.3351 12.6683 26.4796 9.23084 32.1414 6.88562C37.8033 4.5404 43.8716 3.33333 50 3.33333C62.3767 3.33333 74.2466 8.24998 82.9983 17.0017C91.75 25.7534 96.6666 37.6232 96.6666 50C96.6666 62.3768 91.75 74.2466 82.9983 82.9983C74.2466 91.75 62.3767 96.6667 50 96.6667Z"
                stroke="currentColor"
                strokeWidth="3"
              />
            </svg>
            <h3 className="py-5 text-2xl text-green-500">Success</h3>
            <p className="text-gray-700 md:px-3">{message}</p>
            <button
              type="button"
              className="mt-6 text-indigo-600 focus:outline-none"
              onClick={() => reset()}
            >
              Go back
            </button>
          </div>
        </div>
      )}

      {isSubmitSuccessful && !isSuccess && (
        <div className="flex flex-col items-center justify-center text-center text-white rounded-md">
          <svg
            width="97"
            height="97"
            viewBox="0 0 97 97"
            className="text-red-400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.9995 69C43.6205 53.379 52.3786 44.621 67.9995 29M26.8077 29L67.9995 69M48.2189 95C42.0906 95 36.0222 93.7929 30.3604 91.4477C24.6985 89.1025 19.554 85.6651 15.2206 81.3316C10.8872 76.9982 7.44975 71.8538 5.10454 66.1919C2.75932 60.53 1.55225 54.4617 1.55225 48.3333C1.55225 42.205 2.75932 36.1366 5.10454 30.4748C7.44975 24.8129 10.8872 19.6684 15.2206 15.335C19.554 11.0016 24.6985 7.56418 30.3604 5.21896C36.0222 2.87374 42.0906 1.66667 48.2189 1.66667C60.5957 1.66667 72.4655 6.58333 81.2172 15.335C89.9689 24.0867 94.8856 35.9566 94.8856 48.3333C94.8856 60.7101 89.9689 72.58 81.2172 81.3316C72.4655 90.0833 60.5957 95 48.2189 95Z"
              stroke="CurrentColor"
              strokeWidth="3"
            />
          </svg>

          <h3 className="text-2xl text-red-400 py-7">
            Oops, Something went wrong!
          </h3>
          <p className="text-gray-300 md:px-3">{message}</p>
          <button
            type="button"
            className="mt-5 focus:outline-none"
            onClick={() => reset()}
          >
            Try Again
          </button>
        </div>
      )}
    </div>
  );
}
