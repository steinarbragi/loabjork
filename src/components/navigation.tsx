'use client';

import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  {
    url: '/',
    text: 'Lóa Björk',
  },
  {
    url: '/projects',
    text: 'Projects',
  },
  {
    url: '/publications',
    text: 'Publications',
  },
  {
    url: '/bio',
    text: 'Bio',
  },
  {
    url: '/contact',
    text: 'Contact',
  },
];

export default function Navigation() {
  const pathname = usePathname();
  return (
    <Disclosure
      as="nav"
      className="bg-white/50 dark:bg-black/60 fixed z-50 right-0 left-0 backdrop-blur shadow"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {navItems.map(item => (
                    <Link
                      href={item.url}
                      key={item.text}
                      className={`inline-flex items-center border-b-2 ${
                        pathname === item.url
                          ? 'border-indigo-500 dark:text-gray-50 text-gray-900'
                          : 'border-transparent text-gray-500'
                      } px-1 pt-1 text-sm font-mediumhover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-300`}
                    >
                      {item.text}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {navItems.map(item => (
                <Link
                  href={item.url}
                  key={item.text}
                  className={`block border-l-4 ${
                    pathname === item.url
                      ? 'bg-indigo-50 dark:bg-slate-900 border-indigo-500 text-indigo-700'
                      : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 hover:dark:bg-gray-800 hover:dark:border-gray-800 hover:dark:text-gray-300'
                  } py-2 pl-3 pr-4 text-base font-medium`}
                >
                  {item.text}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
