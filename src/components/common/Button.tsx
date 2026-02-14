import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent';
}

export default function Button({ variant = 'primary', className, children, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        'px-4 py-2 rounded font-semibold',
        variant === 'primary' && 'bg-primary text-white',
        variant === 'secondary' && 'bg-card-bg text-text-primary border border-border-color',
        variant === 'accent' && 'bg-accent-green text-black',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}