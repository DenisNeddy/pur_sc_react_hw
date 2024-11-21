import { ButtonHTMLAttributes } from 'react';
import { CardProps } from '../Card/Card.props';

export interface FavoriteLinkProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    elementData: CardProps,
    text: string,
    onClick?: () => void
}