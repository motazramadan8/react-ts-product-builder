import Button from "./ui/Button";
import Image from "./ui/Image";
import { IProduct } from "../interfaces";
import { numberWithComma, textSlicer } from "../utils/functions";
import CircleColor from "./ui/CircleColor";

interface IProps {
  product: IProduct;
  setProductToEdit: (product: IProduct) => void;
  openEditModal: () => void;
  setProductToEditIdx: (value: number) => void;
  openDeleteModal: () => void;
  index: number;
}

const ProductCard = ({
  product,
  setProductToEdit,
  openEditModal,
  setProductToEditIdx,
  openDeleteModal,
  index,
}: IProps) => {
  const { title, imageURL, price, description, colors, category } = product;

  /* --------- HANDLER --------- */
  const onEdit = () => {
    openEditModal();
    setProductToEdit(product);
    setProductToEditIdx(index);
  };
  const onDelete = () => {
    setProductToEdit(product);
    openDeleteModal();
  };

  /* --------- RENDER --------- */
  const renderProductColors = colors.map((color) => (
    <CircleColor key={color} color={color} />
  ));

  return (
    <div className="max-w-sm md:max-w-lg mx-auto md:mx-0 border rounded-lg p-[8px] flex flex-col">
      <Image imageURL={imageURL} alt={title} className="rounded-lg" />

      <h3 className="text-xl font-normal my-2">{title}</h3>
      <p className="text-gray-500">{textSlicer(description)}</p>

      <div className="flex items-center my-4 space-x-1 flex-wrap">
        {renderProductColors}
      </div>

      <div className="flex items-center justify-between">
        <span className="text-xl font-bold text-indigo-600">
          ${numberWithComma(price)}
        </span>
        <div className="flex items-center space-x-2">
          <Image
            imageURL={category.categoryImage}
            alt={category.categoryTitle}
            className="w-10 h-10 rounded-full object-cover"
          />
          <h5 className="font-medium">{category.categoryTitle}</h5>
        </div>
      </div>

      <div className="flex justify-between space-x-2 mt-4">
        <Button onClick={onEdit}>Edit</Button>
        <Button onClick={onDelete} variant="danger">
          Remove
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
