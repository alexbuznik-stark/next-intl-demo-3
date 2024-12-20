import {setRequestLocale} from 'next-intl/server';

type Props = {
  params: {locale: string};
};
export default function IndexPage({params: {locale}}: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  return <div>hello page</div>;
}
