import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';
import {getLocalePath} from './settings';

export default getRequestConfig(async ({requestLocale}) => {
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that the incoming `locale` is valid
  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  const messages = {} as Record<string, string>;
  try {
    const parts = locale.split('-');
    let localeLang = parts[0];
    if (parts.length === 3) {
      localeLang = parts.slice(0, 2).join('-');
    }

    const rawMessages = await fetch(getLocalePath(localeLang), {
      next: {tags: ['i18n', localeLang]}
    });
    // const defaultMessages = await fetch(getLocalePath(localeLang), {
    //   next: {tags: ['i18n', defaultLocale]}
    // });
    const localeJson = await rawMessages.json();
    // const defaultLocaleJson = await defaultMessages.json();

    console.log('localeJson', Object.keys(localeJson).length);
    // eslint-disable-next-line no-restricted-syntax
    for (const k in localeJson) {
      if (!k.includes('.')) {
        const key = k.replace(/^t_/g, '');
        messages[key] = localeJson[k];
      }
    }
  } catch (e) {
    console.error('i18n getRequestConfig', e);
    // captureException(e);
  }
  return {
    locale,
    messages
  };
});
