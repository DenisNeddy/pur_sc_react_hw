import { ButtonHTMLAttributes } from 'react';

export interface FavoriteLinkProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    favorite: boolean,
    text: string,
    onClick: () => void
}