import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const baseStyles = 'font-montserrat font-semibold rounded-lg transition-all duration-300';

    const variants = {
      primary:
        'bg-primary-navy text-neutral-white hover:bg-primary-blue active:scale-95 disabled:opacity-50',
      secondary: 'bg-accent-yellow text-primary-navy hover:bg-opacity-90 active:scale-95 disabled:opacity-50',
      tertiary: 'bg-neutral-light text-primary-navy hover:bg-neutral-light/70 active:scale-95 disabled:opacity-50',
      outline: 'border-2 border-primary-navy text-primary-navy hover:bg-neutral-light active:scale-95 disabled:opacity-50',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export default Button;
