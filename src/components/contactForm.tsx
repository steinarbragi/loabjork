'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';

const textFieldClasses =
  'dark:bg-slate-900 block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6';

const labelClasses = 'block text-sm font-semibold leading-6';

type Inputs = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function Example() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
  const t = useTranslations('contact');
  console.log(watch('name'));
  return (
    <form
      action="#"
      onSubmit={handleSubmit(onSubmit)}
      method="POST"
      className="px-6 pb-24 sm:pb-32 lg:px-8 lg:py-48"
    >
      <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
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
                {...(register('name'), { required: true })}
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
                {...(register('email'), { required: true })}
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
                {...(register('message'), { required: true })}
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
      </div>
    </form>
  );
}
