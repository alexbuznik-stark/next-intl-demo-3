import {setRequestLocale} from 'next-intl/server';
import PageLayout from '@/components/PageLayout';
import {RevalidateButton} from '../components/RevalidateButton';

type Props = {
  params: {locale: string};
};

export default function IndexPage({params: {locale}}: Props) {
  // Enable static rendering
  setRequestLocale(locale);

  return (
    <PageLayout>
      <p className="max-w-[590px]">
        <RevalidateButton />
      </p>
    </PageLayout>
  );
}
