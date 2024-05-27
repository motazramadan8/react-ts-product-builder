import { useState } from "react";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Modal";
import { productList, formInputsList } from "./data";
import Button from "./components/ui/Button";
import Input from "./components/ui/Input";

const App = () => {
  /* --------- STATE --------- */
  const [isOpen, setIsOpen] = useState(false);

  /* --------- HANDLER --------- */
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  /* --------- RENDER --------- */
  const renderProductList = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));
  const renderFormInputsList = formInputsList.map((input) => (
    <div className="flex flex-col" key={input.id}>
      <label
        htmlFor={input.id}
        className="mb-[2px] text-sm font-medium text-gray-700"
      >
        {input.label}
      </label>
      <Input id={input.id} name={input.name} type={input.type} />
    </div>
  ));

  return (
    <main className="container my-5">
      <Button onClick={openModal} width="w-fit">
        Build Now
      </Button>
      <Modal isOpen={isOpen} closeModal={closeModal} title="ADD NEW PRODUCT">
        <form className="space-y-3">
          {renderFormInputsList}
          <div className="flex items-center space-x-3">
            <Button onClick={closeModal}>Submit</Button>
            <Button onClick={closeModal} variant="cancel">
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 mt-2 rounded-lg">
        {renderProductList}
      </div>
    </main>
  );
};

export default App;
