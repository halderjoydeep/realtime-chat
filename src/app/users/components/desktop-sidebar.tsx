'use client';

import { Avatar } from '@/components';
import { useRoutes } from '@/hooks';
import { User } from '@prisma/client';
import { DesktopNavItem } from './desktop-nav-item';

interface DesktopSideBarProps {
  currentUser: User;
}

export function DesktopSideBar({ currentUser }: DesktopSideBarProps) {
  const routes = useRoutes();

  return (
    <aside className='fixed inset-y-0 left-0 z-10 hidden w-20 justify-between overflow-y-auto border-r border-gray-200 py-4 lg:flex lg:flex-col'>
      <nav className='flex h-full flex-col items-center justify-between gap-4'>
        <ul role='list' className='flex flex-col items-center space-y-1'>
          {routes.map((route) => (
            <DesktopNavItem key={route.label} {...route} />
          ))}
        </ul>

        <Avatar user={currentUser} />
      </nav>
    </aside>
  );
}
