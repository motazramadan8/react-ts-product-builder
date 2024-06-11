export interface IProduct {
  id?: string | undefined;
  title: string;
  description: string;
  imageURL: string;
  price: string;
  colors: string[];
  categoryTitle: string;
  categoryImage: string;
}

export interface IFormInput {
  id: string;
  name: "title" | "description" | "price" | "imageURL";
  label: string;
  type: string;
}

export interface IValidationProduct {
  title: string;
  description: string;
  imageURL: string;
  price: string;
}
