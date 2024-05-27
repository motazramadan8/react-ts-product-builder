import Button from "./ui/Button";
import Image from "./ui/Image";
import { IProduct } from "../interfaces";
import { textSlicer } from "../utils/functions";

interface IProps {
  product: IProduct;
}

const ProductCard = ({ product }: IProps) => {
  const {
    title,
    imageURL,
    price,
    description,
    // colors,
    categoryTitle,
    categoryImage,
  } = product;
  // ** Renders
  return (
    <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-lg p-[8px] flex flex-col">
      <Image imageURL={imageURL} alt={title} className="rounded-lg" />

      <h3 className="text-xl font-normal my-2">{title}</h3>
      <p className="text-gray-500">{textSlicer(description)}</p>

      <div className="flex items-center my-4 space-x-1">
        <span className="w-5 h-5 bg-indigo-600 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-orange-600 rounded-full cursor-pointer" />
        <span className="w-5 h-5 bg-red-600 rounded-full cursor-pointer" />
      </div>

      <div className="flex items-center justify-between">
        <span className="text-xl font-bold text-indigo-600">${price}</span>
        <div className="flex items-center space-x-2">
          <Image
            imageURL={categoryImage}
            alt={categoryTitle}
            className="w-10 h-10 rounded-full object-cover"
          />
          <h5 className="font-medium">{categoryTitle}</h5>
        </div>
      </div>

      <div className="flex justify-between space-x-2 mt-4">
        <Button onClick={() => console.log("Clicked")}>Edit</Button>
        <Button variant="danger">Destroy</Button>
      </div>
    </div>
  );
};

export default ProductCard;
