import { signOut } from '@/lib/auth';

export default async function Users() {
  return (
    <form
      action={async () => {
        'use server';

        await signOut();
      }}
    >
      <button type='submit'>Log out</button>
    </form>
  );
}
