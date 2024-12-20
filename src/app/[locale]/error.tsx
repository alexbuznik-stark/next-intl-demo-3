'use client';

import {useEffect} from 'react';
import PageLayout from '@/components/PageLayout';

type Props = {
  error: Error;
  reset(): void;
};

export default function Error({error, reset}: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <PageLayout>
      <div>
        <button onClick={reset} type="button">
          Reset
        </button>
      </div>
    </PageLayout>
  );
}
