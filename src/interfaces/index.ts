export interface IProduct {
  id?: string | undefined;
  title: string;
  description: string;
  image: string;
  price: number;
  colors: string[];
  categoryTitle: string;
  categoryImage: string;
}

export interface IFormInput {
  id: string;
  name: string;
  label: string;
  type: string;
}
