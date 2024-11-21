export interface CardProps {
    id: string,
    img: string,
    title: string,
    rating: number,
    favorite?: boolean, 
    onClick?: () => void
}

export interface CardPropsStyle {
    backgroundImage: string,
    backgroundRepeat: string,
    backgroundPosition: string,
    backgroundSize: string
}