import { Metadata } from 'next';
import { EmptyState } from './components';

export const metadata: Metadata = {
  title: 'Users',
};

export default function Users() {
  return (
    <div className='hidden h-full lg:block lg:pl-80'>
      <EmptyState />
    </div>
  );
}
