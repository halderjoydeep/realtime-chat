import { getCurrentUser } from '@/actions';
import { DesktopSideBar, MobileFooter } from './components';

export default async function UsersLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const currentUser = await getCurrentUser();

  return (
    <div className='h-full'>
      <DesktopSideBar currentUser={currentUser!} />
      <MobileFooter />
      <main className='h-full lg:pl-20'>{children}</main>
    </div>
  );
}
