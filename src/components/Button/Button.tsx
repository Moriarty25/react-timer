import { FC, ReactElement, ButtonHTMLAttributes } from "react";
import "./Button.css";

type TButtonProps = {
  text?: string;
  icon?: ReactElement;
  size?: "l" | "m" | "s";
  bgColor?: "main" | "secondary";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<TButtonProps> = ({
  text,
  icon,
  size = "m",
  bgColor = "main",
  ...attrs
}) => {
  return (
    <button
      className={`button ${
        size === "l"
          ? "button--l"
          : size === "m"
          ? "button--m"
          : size === "s"
          ? "button--s"
          : ""
      }
        ${`${bgColor === "main" ? "button--main" : "button--secondary"}`}
    `}
      {...attrs}
    >
      {icon && <div className="button__icon">{icon}</div>}
      {text && <p className="button__text">{text}</p>}
    </button>
  );
};
