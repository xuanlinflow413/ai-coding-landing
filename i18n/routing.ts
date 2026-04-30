import {defineRouting} from 'next-intl/routing';
import createMiddleware from 'next-intl/middleware';
 
export const routing = defineRouting({
  locales: ['en', 'zh'],
  defaultLocale: 'en'
});
 
export default createMiddleware(routing);
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(zh|en)/:path*']
};