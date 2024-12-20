import {notFound} from 'next/navigation';
import {setRequestLocale} from 'next-intl/server';
import {ReactNode} from 'react';
import BaseLayout from '@/components/BaseLayout';
import {routing} from '@/i18n/routing';
import {prerenderLocales} from '../../i18n/settings';

type Props = {
  children: ReactNode;
  params: {locale: string};
};

export function generateStaticParams() {
  return prerenderLocales;
}

export default async function LocaleLayout({
  children,
  params: {locale}
}: Props) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return <BaseLayout locale={locale}>{children}</BaseLayout>;
}
