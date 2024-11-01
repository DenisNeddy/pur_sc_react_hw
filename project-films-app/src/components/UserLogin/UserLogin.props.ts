import { UserProps } from '../../context/user.context';

export interface UserLoginProps {
    user: UserProps[],
    Logout: () => void
}