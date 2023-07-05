
export interface IButton {
    theme?: "bgcolor" | "transparant" | "outline";
    color?: "primary" | "secondary";
    size?: "sm" | "base" | "lg" ;
    disabled?: boolean;
    className?: string;
    children: JSX.Element | ReactNode[] | string;
    type: "button" | "submit" | "reset";
    onClick?: () => void;
}