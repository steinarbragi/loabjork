import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'is'],

  // Used when no locale matches
  defaultLocale: 'is',
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(is|en)/:path*'],
};
