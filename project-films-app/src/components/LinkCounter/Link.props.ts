import { HTMLProps, ReactNode } from 'react';

export interface LinkProps extends HTMLProps<HTMLDivElement> {
    children: ReactNode,
}