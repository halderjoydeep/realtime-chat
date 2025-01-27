'use client';

import { AuthSocialButton, Button, Input } from '@/components';
import axios from 'axios';
import { signIn } from 'next-auth/react';
import { useCallback, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { BsGithub, BsGoogle } from 'react-icons/bs';

type Variant = 'LOGIN' | 'REGISTER';

export const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>('LOGIN');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const toggleVariant = useCallback(() => {
    setVariant((prev) => (prev === 'LOGIN' ? 'REGISTER' : 'LOGIN'));
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    if (variant === 'REGISTER') {
      axios
        .post('/api/register', data)
        .then(() => toast.success('Successfully registered!'))
        .catch(() => toast.error('Something went wrong!'))
        .finally(() => setIsLoading(false));
    }

    if (variant === 'LOGIN') {
      signIn('credentials', { ...data, redirect: false })
        .then((res) => {
          if (res?.error) {
            toast.error('Invalid credentialss!');
          } else if (res?.ok) {
            toast.success('Logged in!');
          }
        })
        .catch(() => toast.error('Something went wrong!'))
        .finally(() => setIsLoading(false));
    }
  };

  const socialAction = (action: string) => {
    setIsLoading(true);

    // NextAuth Social Sign in
  };

  return (
    <div className='mt-8 rounded-lg bg-white px-4 py-8 shadow-sm sm:mx-auto sm:w-full sm:max-w-md sm:px-10'>
      <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
        {variant === 'REGISTER' && (
          <Input
            id='name'
            label='Name'
            errors={errors}
            register={register}
            // required={true}
            disabled={isLoading}
          />
        )}
        <Input
          id='email'
          label='Email address'
          type='email'
          errors={errors}
          register={register}
          // required={true}
          disabled={isLoading}
        />
        <Input
          id='password'
          label='Password'
          type='password'
          errors={errors}
          register={register}
          // required={true}
          disabled={isLoading}
        />

        <Button fullWidth disabled={isLoading} type='submit'>
          {variant === 'LOGIN' ? 'Sign in' : 'Register'}
        </Button>
      </form>

      <div className='mt-6'>
        {/* Divider */}
        <div className='relative'>
          <div className='absolute inset-0 flex items-center'>
            <div className='w-full border-t border-gray-300' />
          </div>

          <div className='relative flex justify-center'>
            <span className='bg-white px-2 text-sm text-gray-500'>
              Or continue with
            </span>
          </div>
        </div>

        {/* Social Logins */}
        <div className='mt-6 flex gap-2'>
          <AuthSocialButton
            icon={BsGithub}
            onClick={() => socialAction('github')}
          />
          <AuthSocialButton
            icon={BsGoogle}
            onClick={() => socialAction('google')}
          />
        </div>
      </div>

      <div className='mt-6 flex justify-center gap-2 px-2 text-sm text-gray-500'>
        <div>
          {variant === 'LOGIN' ? 'New to Messenger?' : 'Already have account?'}
        </div>

        <div onClick={toggleVariant} className='cursor-pointer underline'>
          {variant === 'LOGIN' ? 'Create an account' : 'Login'}
        </div>
      </div>
    </div>
  );
};
