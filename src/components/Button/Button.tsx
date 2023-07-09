import {FC, ReactElement, ButtonHTMLAttributes} from "react";
import './Button.css';

type TButtonProps = {
    text?: string;
    icon?: ReactElement;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<TButtonProps> = ({text, icon, ...attrs}) => {
    return (
        <button 
            className="button"
            {...attrs}
        >
            {icon && <div className="button__icon">{icon}</div>}
            {text && <p className="button__text">{text}</p>}
        </button>
    )
}
