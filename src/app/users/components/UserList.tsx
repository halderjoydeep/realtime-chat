'use client';
import { User } from '@prisma/client';
import { UserBox } from './UserBox';

export const UserList = ({ users }: { users: User[] }) => {
  return (
    <aside className='fixed inset-y-0 left-0 block w-full overflow-y-auto border-r border-gray-200 pb-20 lg:left-20 lg:w-80 lg:pb-0'>
      {/* This div is necessary? */}
      <div className='px-5'>
        <div className='my-4 text-2xl font-bold text-neutral-800'>People</div>

        <ul className='flex flex-col'>
          {users.map((user) => (
            <UserBox key={user.id} user={user} />
          ))}
        </ul>
      </div>
    </aside>
  );
};
