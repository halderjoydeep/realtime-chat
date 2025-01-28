import { DesktopSideBar } from './components';

export default function UsersLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className='h-full'>
      <DesktopSideBar />
      <main className='h-full lg:pl-20'>{children}</main>
    </div>
  );
}
