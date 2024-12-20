// import {useTranslations} from 'next-intl';
import PageLayout from './PageLayout';

export default function NotFoundPage() {
  // const t = useTranslations();
  const t = 'Not Found';

  return (
    <PageLayout title={t}>
      <p className="max-w-[460px]">{t}</p>
    </PageLayout>
  );
}
