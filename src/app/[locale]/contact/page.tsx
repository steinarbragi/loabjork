import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline';
import pick from 'lodash/pick';
import {
  useTranslations,
  useMessages,
  NextIntlClientProvider,
} from 'next-intl';
import ContactForm from '@/components/contactForm';

export default function Contact() {
  const t = useTranslations('contact');
  const messages = useMessages();

  return (
    <main>
      <div className="relative z-0">
        <div className="mx-auto grid max-w-4xl grid-cols-1 lg:grid-cols-2">
          <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-200">
                {t('contact')}
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
          <NextIntlClientProvider messages={pick(messages, 'contact')}>
            <ContactForm />
          </NextIntlClientProvider>
        </div>
      </div>
    </main>
  );
}

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  return {
    title: `${params.locale === 'is' ? 'Hafa Samband' : 'Contact'} | Lóa Björk`,
    description: 'Lóa Björk Bragadóttir',
  };
}
