import createMiddleware from 'next-intl/middleware';
import {LanguageEnum} from './types';

export default createMiddleware({
  // A list of all locales that are supported
  locales: Object.values<LanguageEnum>(LanguageEnum),

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: LanguageEnum.en_US,
});

export const config = {
  // Skip all paths that should not be internationalized. This example skips the
  // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
