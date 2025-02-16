import React from 'react';
import { twMerge } from 'tailwind-merge';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

type ButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
  variant: 'outline' | 'solid' | 'rounded';
  size: 'small' | 'large';
  type?: 'submit' | 'reset' | 'button';
  ariaLabel?: string;
} & VariantProps<typeof buttonVariants>;

const buttonVariants = cva(['rounded-md transition-colors duration-300'], {
  variants: {
    variant: {
      outline:
        'border-orange bg-transparent border-[1px] text-orange hover:bg-orange hover:text-white',
      solid:
        'bg-orange text-white hover:bg-white hover:text-orange border-[1px] border-orange',
    },
    size: {
      small: 'py-2 px-6 text-base',
      large: 'py-3 px-12 text-lg',
    },
  },
});

const Button = (props: ButtonProps) => {
  return (
    <button
      aria-label={props.ariaLabel}
      className={twMerge(
        buttonVariants(props as VariantProps<typeof buttonVariants>)
      )}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
