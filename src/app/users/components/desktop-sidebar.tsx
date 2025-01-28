'use client';

import { useRoutes } from '@/hooks';
import { DesktopNavItem } from './desktop-nav-item';

export function DesktopSideBar() {
  const routes = useRoutes();
  return (
    <aside className='fixed inset-y-0 left-0 z-10 hidden w-20 justify-between overflow-y-auto border-r border-gray-200 pb-4 lg:flex lg:flex-col'>
      <nav className='mt-4'>
        <ul role='list' className='flex flex-col items-center space-y-1'>
          {routes.map((route) => (
            <DesktopNavItem key={route.label} {...route} />
          ))}
        </ul>
      </nav>
    </aside>
  );
}
