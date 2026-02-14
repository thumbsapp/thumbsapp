import { InputHTMLAttributes } from 'react';
import clsx from 'clsx';

export default function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={clsx(
        'bg-background border border-border-color rounded px-3 py-2 text-text-primary focus:outline-none focus:border-primary',
        className
      )}
      {...props}
    />
  );
}