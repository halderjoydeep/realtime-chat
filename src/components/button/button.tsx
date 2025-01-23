'use client';

import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  secondary?: boolean;
  danger?: boolean;
  fullWidth?: boolean;
}

export const Button = ({
  children,
  secondary,
  danger,
  fullWidth,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        'inline-flex cursor-pointer items-center justify-center rounded-md px-3 py-1.5 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:cursor-default disabled:opacity-50',
        {
          'text-gray-900': secondary,
          'bg-sky-500 text-white hover:bg-sky-600 focus-visible:outline-sky-600':
            !secondary,
          'bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600':
            danger,
          'w-full': fullWidth,
        },
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
