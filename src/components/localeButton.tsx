'use client';

import { usePathname, useRouter } from '@/utils/navigation';
import { useLocale } from 'next-intl';

export default function LocaleButton() {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale();
  return (
    <div className="inline-flex items-center">
      <button
        type="button"
        className="text-center rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        onClick={() =>
          router.replace(pathname, { locale: locale === 'is' ? 'en' : 'is' })
        }
      >
        {locale === 'is' ? 'English' : 'Íslenska'}
      </button>
    </div>
  );
}
