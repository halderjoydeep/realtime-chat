import { signOut } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
import { HiChat } from 'react-icons/hi';
import { HiArrowLeftOnRectangle, HiUsers } from 'react-icons/hi2';

export const useRoutes = () => {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        label: 'Chat',
        icon: HiChat,
        href: '/conversation',
        active: pathname === '/conversations',
      },
      {
        label: 'Users',
        icon: HiUsers,
        href: '/users',
        active: pathname === '/users',
      },
      {
        label: 'Logout',
        icon: HiArrowLeftOnRectangle,
        href: '#',
        onClick: () => signOut(),
      },
    ],
    [pathname],
  );

  return routes;
};
