/* eslint-disable react-refresh/only-export-components */
import { memo } from "react";

interface IProps {
  msg: string;
}

const ErrorMessage = ({ msg }: IProps) => {
  return msg ? (
    <span className="block text-red-700 font-semibold text-sm">{msg}</span>
  ) : null;
};

export default memo(ErrorMessage);
