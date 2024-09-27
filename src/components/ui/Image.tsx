/* eslint-disable react-refresh/only-export-components */
import { memo } from "react";

interface IProps {
  imageURL: string;
  alt: string;
  className?: string;
}

const Image = ({ imageURL, alt, className = "" }: IProps) => {
  return <img src={imageURL} alt={alt} className={className} />;
};

export default memo(Image);
