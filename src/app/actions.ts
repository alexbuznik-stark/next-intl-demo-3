'use server';

import {revalidateTag} from 'next/cache';

export async function updateI18N() {
  // Invalidate all data tagged with 'posts' in the cache
  revalidateTag('i18n');
}
