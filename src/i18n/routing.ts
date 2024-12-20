import {createNavigation} from 'next-intl/navigation';
import {defineRouting} from 'next-intl/routing';
import {DEFAULT_LOCALE_COUNTRY, locales} from './settings';

export const routing = defineRouting({
  locales,
  defaultLocale: DEFAULT_LOCALE_COUNTRY,
  localePrefix: 'as-needed'
});

// export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const {Link, getPathname, redirect, usePathname, useRouter} =
  createNavigation(routing);
