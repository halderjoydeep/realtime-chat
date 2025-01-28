import { cn } from '@/lib/utils';
import Link from 'next/link';
import { IconType } from 'react-icons';

interface DesktopNavItemProps {
  label: string;
  icon: IconType;
  href: string;
  onClick?: () => void;
  active?: boolean;
}

export const DesktopNavItem = ({
  label,
  icon: Icon,
  href,
  onClick,
  active,
}: DesktopNavItemProps) => {
  return (
    <li className='' onClick={onClick}>
      <Link
        href={href}
        title={label}
        className={cn(
          'flex items-center justify-center rounded-md p-3 text-sm leading-6 font-semibold text-gray-500 hover:bg-gray-100 hover:text-black',
          { 'bg-gray-100 text-black': active },
        )}
      >
        <Icon className='h-6 w-6 shrink-0' />
        <span className='sr-only'>{label}</span>
      </Link>
    </li>
  );
};
