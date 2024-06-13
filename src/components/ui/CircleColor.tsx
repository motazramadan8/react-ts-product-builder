import { HTMLAttributes } from "react";

interface IProps extends HTMLAttributes<HTMLSpanElement> {
  color: string;
}

const CircleColor = ({ color, ...props }: IProps) => {
  return (
    <span
      className={`w-5 h-5 rounded-full cursor-pointer`}
      style={{ backgroundColor: color }}
      title={color}
      {...props}
    />
  );
};

export default CircleColor;
