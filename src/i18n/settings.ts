import countriesList from './countries.json' assert {type: 'json'};
import languagesList from './languages.json' assert {type: 'json'};

export const locales = countriesList.flatMap(({code}) =>
  languagesList.map((lang) => `${lang.code}-${code}`)
);

// default languages for countries
export const prerenderLocales = countriesList.map(({code, languages}) => ({
  locale: `${languages[0]}-${code}`
}));

export const DEFAULT_LOCALE = 'en-us';
export const DEFAULT_LOCALE_COUNTRY = 'en-us-US';

export function getLocalePath(locale: string) {
  return `${process.env.LOCALE_BUCKET_URL}${process.env.LOCALE_PATH}${locale}.json`;
}
