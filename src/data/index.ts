import { IProduct, IFormInput } from "../interfaces";
import { v4 as uuid } from "uuid";

export const productList: IProduct[] = [
  {
    id: uuid(),
    imageURL:
      "https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80",
    title: "1- 2024 Greenland island",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum reiciendis, magnam perspiciatis delectus provident quas quis. Mollitia ipsam quia similique quaerat, odio ipsa eius numquam necessitatibus eveniet. Quos dolore alias temporibus tempore animi sapiente dolorum, rem molestias earum praesentium inventore nobis. Doloribus ipsa itaque praesentium voluptatem ipsam repellendus accusamus iste.",
    colors: ["#4F46E5", "#F97316", "#DC2626"],
    price: "1000000",
    categoryImage:
      "https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80",
    categoryTitle: "Islands",
  },
  {
    id: uuid(),
    imageURL:
      "https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80",
    title: "2- 2024 Greenland island",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum reiciendis, magnam perspiciatis delectus provident quas quis. Mollitia ipsam quia similique quaerat, odio ipsa eius numquam necessitatibus eveniet. Quos dolore alias temporibus tempore animi sapiente dolorum, rem molestias earum praesentium inventore nobis. Doloribus ipsa itaque praesentium voluptatem ipsam repellendus accusamus iste.",
    colors: ["#4F46E5", "#F97316"],
    price: "3000000",
    categoryImage:
      "https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80",
    categoryTitle: "Islands",
  },
  {
    id: uuid(),
    imageURL:
      "https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80",
    title: "3- 2024 Greenland island",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum reiciendis, magnam perspiciatis delectus provident quas quis. Mollitia ipsam quia similique quaerat, odio ipsa eius numquam necessitatibus eveniet. Quos dolore alias temporibus tempore animi sapiente dolorum, rem molestias earum praesentium inventore nobis. Doloribus ipsa itaque praesentium voluptatem ipsam repellendus accusamus iste.",
    colors: ["#4F46E5", "#F97316", "#4F46E5", "#F97316", "#DC2626"],
    price: "1500000",
    categoryImage:
      "https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80",
    categoryTitle: "Islands",
  },
  {
    id: uuid(),
    imageURL:
      "https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80",
    title: "4- 2024 Greenland island",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum reiciendis, magnam perspiciatis delectus provident quas quis. Mollitia ipsam quia similique quaerat, odio ipsa eius numquam necessitatibus eveniet. Quos dolore alias temporibus tempore animi sapiente dolorum, rem molestias earum praesentium inventore nobis. Doloribus ipsa itaque praesentium voluptatem ipsam repellendus accusamus iste.",
    colors: ["#4F46E5", "#F97316", "#4F46E5", "#F97316", "#DC2626"],
    price: "5000000",
    categoryImage:
      "https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80",
    categoryTitle: "Islands",
  },
  {
    id: uuid(),
    imageURL:
      "https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80",
    title: "5- 2024 Greenland island",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum reiciendis, magnam perspiciatis delectus provident quas quis. Mollitia ipsam quia similique quaerat, odio ipsa eius numquam necessitatibus eveniet. Quos dolore alias temporibus tempore animi sapiente dolorum, rem molestias earum praesentium inventore nobis. Doloribus ipsa itaque praesentium voluptatem ipsam repellendus accusamus iste.",
    colors: ["#4F46E5", "#F97316", "#4F46E5", "#F97316", "#DC2626"],
    price: "1200000",
    categoryImage:
      "https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80",
    categoryTitle: "Islands",
  },
  {
    id: uuid(),
    imageURL:
      "https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80",
    title: "6- 2024 Greenland island",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum reiciendis, magnam perspiciatis delectus provident quas quis. Mollitia ipsam quia similique quaerat, odio ipsa eius numquam necessitatibus eveniet. Quos dolore alias temporibus tempore animi sapiente dolorum, rem molestias earum praesentium inventore nobis. Doloribus ipsa itaque praesentium voluptatem ipsam repellendus accusamus iste.",
    colors: ["#4F46E5", "#F97316", "#4F46E5", "#F97316", "#DC2626"],
    price: "2500000",
    categoryImage:
      "https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80",
    categoryTitle: "Islands",
  },
  {
    id: uuid(),
    imageURL:
      "https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80",
    title: "7- 2024 Greenland island",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum reiciendis, magnam perspiciatis delectus provident quas quis. Mollitia ipsam quia similique quaerat, odio ipsa eius numquam necessitatibus eveniet. Quos dolore alias temporibus tempore animi sapiente dolorum, rem molestias earum praesentium inventore nobis. Doloribus ipsa itaque praesentium voluptatem ipsam repellendus accusamus iste.",
    colors: ["#4F46E5", "#F97316", "#4F46E5", "#F97316", "#DC2626"],
    price: "8000000",
    categoryImage:
      "https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80",
    categoryTitle: "Islands",
  },
  {
    id: uuid(),
    imageURL:
      "https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80",
    title: "8- 2024 Greenland island",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum reiciendis, magnam perspiciatis delectus provident quas quis. Mollitia ipsam quia similique quaerat, odio ipsa eius numquam necessitatibus eveniet. Quos dolore alias temporibus tempore animi sapiente dolorum, rem molestias earum praesentium inventore nobis. Doloribus ipsa itaque praesentium voluptatem ipsam repellendus accusamus iste.",
    colors: ["#4F46E5", "#F97316", "#4F46E5", "#F97316", "#DC2626"],
    price: "9000000",
    categoryImage:
      "https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80",
    categoryTitle: "Islands",
  },
];

export const formInputsList: IFormInput[] = [
  {
    id: "title",
    name: "title",
    label: "Product Title",
    type: "text",
  },
  {
    id: "description",
    name: "description",
    label: "Product description",
    type: "text",
  },
  {
    id: "image",
    name: "imageURL",
    label: "Product Image URL",
    type: "text",
  },
  {
    id: "price",
    name: "price",
    label: "Product Price",
    type: "text",
  },
];
