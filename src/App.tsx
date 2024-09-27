import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import { productList, formInputsList, colors, categories } from "./data";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";
import { IErrors, IProduct } from "./interfaces";
import { productValidation } from "./validation";
import ErrorMessage from "./components/ui/ErrorMessage";
import CircleColor from "./components/ui/CircleColor";
import { v4 as uuid } from "uuid";
import Select from "./components/ui/Select";
import { ProductNamesType } from "./types";
import { toast, Toaster } from "react-hot-toast";

const App = () => {
  const defaultProductObj = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: [],
    category: {
      categoryTitle: "",
      categoryImage: "",
    },
  };

  /* --------- STATE --------- */
  const [products, setProducts] = useState<IProduct[]>(productList);
  const [product, setProduct] = useState<IProduct>(defaultProductObj);
  const [productToEdit, setProductToEdit] =
    useState<IProduct>(defaultProductObj);
  const [productToEditIdx, setProductToEditIdx] = useState<number>(0);
  const [errors, setErrors] = useState<IErrors>({
    title: "",
    description: "",
    imageURL: "",
    price: "",
    colors: "",
  });
  const [tempColor, setTempColor] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState<boolean>(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  /* --------- HANDLER --------- */
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  const openEditModal = useCallback(() => setIsOpenEditModal(true), []);
  const closeEditModal = () => setIsOpenEditModal(false);
  const openDeleteModal = useCallback(() => setIsOpenDeleteModal(true), []);
  const closeDeleteModal = () => setIsOpenDeleteModal(false);
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    setProduct({
      ...product,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const onChangeEditHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    setProductToEdit({
      ...productToEdit,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const onCancelAddProduct = () => {
    setProduct(defaultProductObj);
    closeModal();
  };

  const onCancelEditProduct = () => {
    setProductToEdit(defaultProductObj);
    closeEditModal();
  };

  const onCancelDeleteProduct = () => {
    closeDeleteModal();
  };

  const removeProductHandler = () => {
    let filteredProducts = [...products];
    filteredProducts = filteredProducts.filter(
      (product) => product.id !== productToEdit.id
    );
    setProducts(filteredProducts);

    closeDeleteModal();
    toast.success("Product deleted successfully!", {
      style: {
        borderRadius: "10px",
        background: "#000",
        color: "#fff",
      },
    });
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const { title, description, imageURL, price } = product;

    const errors = productValidation({
      title,
      description,
      imageURL,
      price,
      colors: tempColor,
    });

    const hasErrorMsg =
      Object.values(errors).some((val) => val === "") &&
      Object.values(errors).every((val) => val === "");

    if (!hasErrorMsg) {
      setErrors(errors);
      return;
    }

    setProducts((prev) => [
      {
        ...product,
        id: uuid(),
        colors: tempColor,
        category: selectedCategory,
      },
      ...prev,
    ]);

    setProduct(defaultProductObj);
    setTempColor([]);
    closeModal();
    toast.success("Product added successfully!", {
      style: {
        borderRadius: "10px",
        background: "#000",
        color: "#fff",
      },
    });
  };

  const submitEditHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const { title, description, imageURL, price, colors } = productToEdit;

    const errors = productValidation({
      title,
      description,
      imageURL,
      price,
      colors: [...tempColor, ...colors],
    });

    const hasErrorMsg =
      Object.values(errors).some((val) => val === "") &&
      Object.values(errors).every((val) => val === "");

    if (!hasErrorMsg) {
      setErrors(errors);
      return;
    }

    // ** Update Product
    const updatedProduct = [...products];
    updatedProduct[productToEditIdx] = {
      ...productToEdit,
      colors: [...productToEdit.colors, ...tempColor],
    };
    console.log(updatedProduct[productToEditIdx]);
    setProducts(updatedProduct);

    setProductToEdit(defaultProductObj);
    setTempColor([]);
    closeEditModal();
    toast.success("Product edited successfully!", {
      style: {
        borderRadius: "10px",
        background: "#000",
        color: "#fff",
      },
    });
  };

  /* --------- RENDER --------- */
  const renderProductList = products.map((product, index) => (
    <ProductCard
      key={product.id}
      product={product}
      setProductToEdit={setProductToEdit}
      openEditModal={openEditModal}
      openDeleteModal={openDeleteModal}
      setProductToEditIdx={setProductToEditIdx}
      index={index}
    />
  ));

  const renderFormInputsList = formInputsList.map((input) => (
    <div className="flex flex-col" key={input.id}>
      <label
        htmlFor={input.id}
        className="mb-[2px] text-sm font-medium text-gray-700"
      >
        {input.label}
      </label>
      <Input
        id={input.id}
        name={input.name}
        type={input.type}
        value={product[input.name]}
        onChange={onChangeHandler}
      />
      <ErrorMessage msg={errors[input.name]} />
    </div>
  ));

  const renderFormColors = colors.map((color) => (
    <CircleColor
      key={color}
      color={color}
      onClick={() => {
        if (tempColor.includes(color)) {
          setTempColor((prev) => prev.filter((c) => c !== color));
          return;
        }
        if (productToEdit.colors.includes(color)) {
          setTempColor((prev) => prev.filter((c) => c !== color));
          return;
        }
        setErrors({ ...errors, colors: "" });
        setTempColor((prev) => [...prev, color]);
      }}
    />
  ));

  const renderProductEditWithErrorMsg = (
    id: string,
    label: string,
    name: ProductNamesType
  ) => {
    return (
      <div className="flex flex-col">
        <label
          htmlFor={id}
          className="mb-[2px] text-sm font-medium text-gray-700"
        >
          {label}
        </label>
        <Input
          id={id}
          name={name}
          type={"text"}
          value={productToEdit[name]}
          onChange={onChangeEditHandler}
        />
        <ErrorMessage msg={errors[name]} />
      </div>
    );
  };

  return (
    <main className="container my-5">
      <Button onClick={openModal} width="w-fit">
        Build Now
      </Button>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 mt-2 rounded-lg">
        {renderProductList}
      </div>

      {/* Add product modal */}
      <Modal isOpen={isOpen} closeModal={closeModal} title="ADD NEW PRODUCT">
        <form className="space-y-3" onSubmit={submitHandler}>
          {renderFormInputsList}
          <Select
            selected={selectedCategory}
            setSelected={setSelectedCategory}
          />
          <div className="flex items-center space-x-2 flex-wrap">
            {renderFormColors}
          </div>
          <div className="flex items-center space-x-1 space-y-1 flex-wrap">
            {tempColor.map((color) => (
              <span
                key={color}
                style={{ backgroundColor: color }}
                className="p-1 text-xs rounded-md text-white"
              >
                {color}
              </span>
            ))}
            <ErrorMessage msg={errors["colors"]} />
          </div>
          <div className="flex items-center space-x-3">
            <Button>Submit</Button>
            <Button onClick={onCancelAddProduct} variant="cancel" type="button">
              Cancel
            </Button>
          </div>
        </form>
      </Modal>

      {/* Edit product modal */}
      <Modal
        isOpen={isOpenEditModal}
        closeModal={closeEditModal}
        title="EDIT PRODUCT"
      >
        <form className="space-y-3" onSubmit={submitEditHandler}>
          {renderProductEditWithErrorMsg("title", "Product Title", "title")}
          {renderProductEditWithErrorMsg(
            "description",
            "Product Description",
            "description"
          )}
          {renderProductEditWithErrorMsg(
            "imageURL",
            "Product ImageUrl",
            "imageURL"
          )}
          {renderProductEditWithErrorMsg("price", "Product Price", "price")}

          <Select
            selected={productToEdit.category}
            setSelected={(val) =>
              setProductToEdit({ ...productToEdit, category: val })
            }
          />

          <div className="flex items-center space-x-2 flex-wrap">
            {renderFormColors}
          </div>
          <div className="flex items-center space-x-1 space-y-1 flex-wrap">
            {tempColor.concat(productToEdit.colors).map((color) => (
              <span
                key={color}
                style={{ backgroundColor: color }}
                className="p-1 text-xs rounded-md text-white"
              >
                {color}
              </span>
            ))}
            <ErrorMessage msg={errors["colors"]} />
          </div>

          <div className="flex items-center space-x-3">
            <Button>Submit</Button>
            <Button
              onClick={onCancelEditProduct}
              variant="cancel"
              type="button"
            >
              Cancel
            </Button>
          </div>
        </form>
      </Modal>

      {/* Delete product modal */}
      <Modal
        isOpen={isOpenDeleteModal}
        closeModal={closeDeleteModal}
        title="Are you sure you want to remove this product from your store?"
      >
        <div className="my-1 text-gray-500 text-sm">
          Deleting this product will remove it permanently from your inventory,
          Any associated data, sales history, and other related information will
          also be deleted. Please make sure this is the intended action.
        </div>

        <div className="flex items-center space-x-3">
          <Button onClick={removeProductHandler} variant="danger">
            Yes, remove
          </Button>
          <Button
            onClick={onCancelDeleteProduct}
            variant="cancel"
            type="button"
          >
            Cancel
          </Button>
        </div>
      </Modal>
      <Toaster position="top-right" />
    </main>
  );
};

export default App;
