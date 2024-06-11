import { IValidationProduct } from "../interfaces";

/**
 * Validate create product data.
 * @param {object} product - The input product to validate.
 * @returns {object} The errors object.
 */
export const productValidation = (product: IValidationProduct) => {
  // Returns an object
  const errors: IValidationProduct = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
  };

  const validImageURL = /^(ftp|http|https):\/\/[^ "]+$/.test(product.imageURL);

  if (
    !product.title.trim() ||
    product.title.length < 10 ||
    product.title.length > 80
  ) {
    errors.title = "Product title must be between 10 and 80 characters";
  }

  if (
    !product.description.trim() ||
    product.description.length < 10 ||
    product.description.length > 600
  ) {
    errors.description =
      "Product description must be between 10 and 600 characters";
  }

  if (!product.imageURL.trim() || !validImageURL) {
    errors.imageURL = "Invalid product image";
  }

  if (!product.imageURL.trim() || isNaN(+product.price)) {
    errors.price = "Invalid product price";
  }

  return errors;
};
