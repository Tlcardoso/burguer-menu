import { cn } from '../../lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';

const buttonVariants = cva(
  [
    'inline-flex',
    'items-center',
    'justify-center',
    'border-transparent',
  ],
  {
    variants: {
      variant: {
        default: [
          'font-medium',
          'size-4',
          'cursor-pointer',
          'w-full',
          'h-12',
          'bg-primary',
          'text-white',
          'rounded-3xl',
        ],
        smallWhite: [
          'w-6',
          'h-6',
          'rounded-full',
          'bg-gray',
          'shadow-md',
        ],
        smallBrown: [
          'w-6',
          'h-6',
          'rounded-full',
          'bg-primary',
          'shadow-md',
          'text-white',
        ],
      },
    },
  },
);

export interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  disabled?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant, className, asChild, disabled, ...props }: ButtonProps,
    ref,
  ) => {
    const Component = asChild ? Slot : 'button';
    return (
      <Component
        ref={ref}
        className={cn(buttonVariants({ variant, className }))}
        disabled={disabled}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
