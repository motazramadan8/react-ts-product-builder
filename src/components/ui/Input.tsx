/* eslint-disable react-refresh/only-export-components */
import { InputHTMLAttributes, memo } from "react";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ className, ...props }: IProps) => {
  return (
    <input
      className={`border-[1px] border-gray-300 shadow-md focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 rounded-lg px-3 py-3 text-md ${className}`}
      {...props}
    />
  );
};

export default memo(Input);
