import { LinkHTMLAttributes, ReactNode } from 'react';

export interface NavLinkProps extends LinkHTMLAttributes<HTMLLinkElement> {
    children: ReactNode
}