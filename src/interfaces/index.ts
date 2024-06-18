import { ProductNamesType } from "../types";

export interface IProduct {
  id?: string;
  title: string;
  description: string;
  imageURL: string;
  price: string;
  colors: string[];
  category: {
    categoryTitle: string;
    categoryImage: string;
  };
}

export interface IFormInput {
  id: string;
  name: ProductNamesType;
  label: string;
  type: string;
}

interface IValidation {
  title: string;
  description: string;
  imageURL: string;
  price: string;
}

export interface IValidationProduct extends IValidation {
  colors: string[];
}

export interface IErrors extends IValidation {
  colors: string;
}

export interface ICategory {
  id: string;
  categoryTitle: string;
  categoryImage: string;
}
