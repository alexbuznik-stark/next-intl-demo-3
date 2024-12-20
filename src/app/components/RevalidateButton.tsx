'use client';

import {updateI18N} from '@/app/actions';

export function RevalidateButton() {
  return (
    <button onClick={() => updateI18N()} type="button">
      Create
    </button>
  );
}
