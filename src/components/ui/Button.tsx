import { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonVariantType, ButtonWidthType } from "../../types";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariantType;
  className?: string;
  width?: ButtonWidthType;
}

const Button = ({
  children,
  className,
  variant = "primary",
  width = "w-full",
  ...props
}: IProps) => {
  return (
    <button
      className={`${
        variant === "danger"
          ? "bg-red-700 hover:bg-red-800"
          : variant === "primary"
          ? "bg-indigo-600 hover:bg-indigo-700"
          : variant === "success"
          ? "bg-green-600 hover:bg-green-700"
          : ""
      } ${width} p-3 text-white rounded-md font-medium transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
