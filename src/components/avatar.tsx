'use client';

import { cn } from '@/lib/utils';
import { User } from '@prisma/client';
import Image from 'next/image';
import { HiUser } from 'react-icons/hi2';

export const Avatar = ({
  user,
  className,
  active,
}: {
  user: User;
  className?: string;
  active?: boolean;
}) => {
  return (
    <div
      className='relative cursor-pointer transition hover:opacity-75'
      tabIndex={0}
    >
      <div
        className={cn(
          'flex h-9 w-9 items-center justify-center rounded-full bg-gray-300 md:h-11 md:w-11',
          className,
        )}
      >
        {user.image ? (
          <Image
            src={user.image}
            fill
            priority
            alt='User Profile Picture'
            className='rounded-full object-cover'
          />
        ) : (
          <HiUser className='h-full w-full p-1 text-white' />
        )}
      </div>

      {active && (
        <div className='absolute top-0 right-0 z-10 h-2 w-2 rounded-full bg-green-500 ring-2 ring-white md:h-3 md:w-3'></div>
      )}
    </div>
  );
};
