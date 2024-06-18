import { ChangeEvent, FormEvent, useState } from "react";
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
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  console.log(productToEdit);

  /* --------- HANDLER --------- */
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  const closeEditModal = () => setIsOpenEditModal(false);
  const openEditModal = () => setIsOpenEditModal(true);
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

  const onCancel = () => {
    setProduct(defaultProductObj);
    closeModal();
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
  };

  const submitEditHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const { title, description, imageURL, price } = productToEdit;

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

    // ** Update Product
    setProductToEdit(defaultProductObj);
    setTempColor([]);
    closeModal();
  };

  /* --------- RENDER --------- */
  const renderProductList = products.map((product) => (
    <ProductCard
      key={product.id}
      product={product}
      setProductToEdit={setProductToEdit}
      openEditModal={openEditModal}
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
            <Button onClick={onCancel} variant="cancel" type="button">
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

          {/* <Select
            selected={selectedCategory}
            setSelected={setSelectedCategory}
          /> */}

          {/* <div className="flex items-center space-x-2 flex-wrap">
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
          </div> */}
          <div className="flex items-center space-x-3">
            <Button>Submit</Button>
            <Button onClick={onCancel} variant="cancel" type="button">
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
    </main>
  );
};

export default App;
