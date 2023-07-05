import { ReactNode } from "react";

export interface ICard {
    active?: boolean;
    children: string | ReactNode | JSX.Element ;
    onClick?: () => void;
    className?: string;
}