'use client';

import { useRoutes } from '@/hooks';
import { useParams } from 'next/navigation';
import { MoobileNavItem } from './mobile-nav-item';

export const MobileFooter = () => {
  const params = useParams();
  const routes = useRoutes();

  if (params?.conversationId) {
    return null;
  }

  return (
    <div className='fixed inset-x-0 bottom-0 z-10 border-t border-gray-200 bg-white lg:hidden'>
      <nav>
        <ul className='flex items-center justify-between'>
          {routes.map((route) => (
            <MoobileNavItem key={route.label} {...route} />
          ))}
        </ul>
      </nav>
    </div>
  );
};
