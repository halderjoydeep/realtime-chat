'use client';

import { cn } from '@/lib/utils';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface InputProps {
  label: string;
  id: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  type?: string;
  required?: boolean;
  disabled?: boolean;
}

export const Input = ({
  id,
  label,
  type,
  register,
  errors,
  required,
  disabled,
}: InputProps) => {
  return (
    <div>
      <label
        htmlFor={id}
        className='block text-sm leading-6 font-medium text-gray-900'
      >
        {label}
      </label>
      <div className='mt-2'>
        <input
          id={id}
          type={type}
          disabled={disabled}
          autoComplete={id}
          {...register(id, { required })}
          className={cn(
            'block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-sky-600 focus:ring-inset sm:text-sm sm:leading-6',
            {
              'focus:ring-rose-500': errors[id],
              'cursor-default opacity-50': disabled,
            },
          )}
        />
      </div>
    </div>
  );
};
