import { Outlet } from '@remix-run/react';
import MainHeader from '~/components/navigation/MainHeader';
import { authenticator } from '../services/auth.server';

import marketingStyles from '~/styles/marketing.css';

export default function MarketingLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}

export async function loader({ request }) {
  return await authenticator.isAuthenticated(request);
}

export function links() {
  return [{ rel: 'stylesheet', href: marketingStyles }];
}

export function headers() {
  return {
    'Cache-Control': 'max-age-3600', // 60 minutes
  };
}
