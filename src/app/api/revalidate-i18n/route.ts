import {updateI18N} from '../../actions';

export function GET() {
  return new Response("It's a me, Mario!", {
    status: 200
  });
}

export async function POST() {
  // #TODO add auth/secret
  console.log('[Next.js] revalidate-i18n Webhook received.');

  await updateI18N();

  return new Response('Success!', {
    status: 200
  });
}
