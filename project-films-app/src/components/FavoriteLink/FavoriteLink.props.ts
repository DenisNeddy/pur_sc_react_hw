import { ButtonHTMLAttributes } from 'react';

export interface FavoriteLinkProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    
    text: string,
    onClick?: () => void
}