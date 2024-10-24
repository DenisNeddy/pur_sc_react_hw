import { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> { 
    icon?: string,
    onChange?: (e:  React.ChangeEvent<HTMLInputElement>) => void,
}