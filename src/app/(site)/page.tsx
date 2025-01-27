import { auth } from '@/lib/auth';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { AuthForm } from './components';

export default async function Home() {
  const session = await auth();

  if (session?.user) {
    redirect('/users');
  }

  return (
    <main className='flex min-h-full flex-col justify-center bg-gray-100 py-12 sm:px-6 lg:px-8'>
      {/* Logo and Description*/}
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <Image
          src='/images/logo.svg'
          width={48}
          height={48}
          priority
          alt='Logo'
          title='Logo'
          className='mx-auto'
        />

        <h2 className='mt-6 text-center text-3xl font-bold tracking-tight text-gray-900'>
          Sign in to your account
        </h2>
      </div>

      <AuthForm />
    </main>
  );
}
