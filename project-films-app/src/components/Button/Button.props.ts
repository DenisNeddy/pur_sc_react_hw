import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonsProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode,
  
}