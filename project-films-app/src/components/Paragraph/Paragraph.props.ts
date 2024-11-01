import { HTMLAttributes, ReactNode } from 'react';

export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement>{
    size?: number,
    children: ReactNode
}