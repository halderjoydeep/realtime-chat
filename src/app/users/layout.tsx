import { getCurrentUser } from '@/actions';
import { getUsers } from '@/actions/getUsers';
import { DesktopSideBar, MobileFooter, UserList } from './components';

export default async function UsersLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const currentUser = await getCurrentUser();
  const users = await getUsers();

  return (
    <div className='h-full'>
      <DesktopSideBar currentUser={currentUser!} />
      <MobileFooter />
      <main className='relative h-full lg:pl-20'>
        <UserList users={users} />
        {children}
      </main>
    </div>
  );
}
