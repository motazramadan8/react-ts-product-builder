/* eslint-disable react-refresh/only-export-components */
import { ButtonHTMLAttributes, memo, ReactNode } from "react";
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
          : variant === "cancel"
          ? "bg-[#d1d5dbb5] hover:bg-gray-300 !text-gray-950"
          : ""
      } ${width} p-3 text-white rounded-lg font-medium transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default memo(Button);
