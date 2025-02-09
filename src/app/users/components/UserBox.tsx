'use client';

import { Avatar } from '@/components';
import { User } from '@prisma/client';

export const UserBox = ({ user }: { user: User }) => {
  return (
    <li className='flex cursor-pointer items-center gap-3 rounded-lg p-3 transition hover:bg-neutral-100'>
      {/* TODO: Create small variant of avatar instead of classname */}
      <Avatar user={user} className='h-6 w-6 md:h-8 md:w-8' />
      <div className='text-sm font-medium text-gray-900'>{user.name}</div>
    </li>
  );
};
