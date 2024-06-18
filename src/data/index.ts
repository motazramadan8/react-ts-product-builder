import { IProduct, IFormInput, ICategory } from "../interfaces";
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
    category: {
      categoryImage:
        "https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80",
      categoryTitle: "Islands",
    },
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
    category: {
      categoryImage:
        "https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80",
      categoryTitle: "Islands",
    },
  },
  {
    id: uuid(),
    imageURL:
      "https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80",
    title: "3- 2024 Greenland island",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum reiciendis, magnam perspiciatis delectus provident quas quis. Mollitia ipsam quia similique quaerat, odio ipsa eius numquam necessitatibus eveniet. Quos dolore alias temporibus tempore animi sapiente dolorum, rem molestias earum praesentium inventore nobis. Doloribus ipsa itaque praesentium voluptatem ipsam repellendus accusamus iste.",
    colors: ["#4F46E5", "#F97316", "#DC2626"],
    price: "1500000",
    category: {
      categoryImage:
        "https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80",
      categoryTitle: "Islands",
    },
  },
  {
    id: uuid(),
    imageURL:
      "https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80",
    title: "4- 2024 Greenland island",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum reiciendis, magnam perspiciatis delectus provident quas quis. Mollitia ipsam quia similique quaerat, odio ipsa eius numquam necessitatibus eveniet. Quos dolore alias temporibus tempore animi sapiente dolorum, rem molestias earum praesentium inventore nobis. Doloribus ipsa itaque praesentium voluptatem ipsam repellendus accusamus iste.",
    colors: ["#4F46E5", "#F97316", "#DC2626"],
    price: "5000000",
    category: {
      categoryImage:
        "https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80",
      categoryTitle: "Islands",
    },
  },
  {
    id: uuid(),
    imageURL:
      "https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80",
    title: "5- 2024 Greenland island",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum reiciendis, magnam perspiciatis delectus provident quas quis. Mollitia ipsam quia similique quaerat, odio ipsa eius numquam necessitatibus eveniet. Quos dolore alias temporibus tempore animi sapiente dolorum, rem molestias earum praesentium inventore nobis. Doloribus ipsa itaque praesentium voluptatem ipsam repellendus accusamus iste.",
    colors: ["#4F46E5", "#F97316", "#DC2626"],
    price: "1200000",
    category: {
      categoryImage:
        "https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80",
      categoryTitle: "Islands",
    },
  },
  {
    id: uuid(),
    imageURL:
      "https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80",
    title: "6- 2024 Greenland island",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum reiciendis, magnam perspiciatis delectus provident quas quis. Mollitia ipsam quia similique quaerat, odio ipsa eius numquam necessitatibus eveniet. Quos dolore alias temporibus tempore animi sapiente dolorum, rem molestias earum praesentium inventore nobis. Doloribus ipsa itaque praesentium voluptatem ipsam repellendus accusamus iste.",
    colors: ["#4F46E5", "#F97316", "#DC2626"],
    price: "2500000",
    category: {
      categoryImage:
        "https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80",
      categoryTitle: "Islands",
    },
  },
  {
    id: uuid(),
    imageURL:
      "https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80",
    title: "7- 2024 Greenland island",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum reiciendis, magnam perspiciatis delectus provident quas quis. Mollitia ipsam quia similique quaerat, odio ipsa eius numquam necessitatibus eveniet. Quos dolore alias temporibus tempore animi sapiente dolorum, rem molestias earum praesentium inventore nobis. Doloribus ipsa itaque praesentium voluptatem ipsam repellendus accusamus iste.",
    colors: ["#4F46E5", "#F97316", "#DC2626"],
    price: "8000000",
    category: {
      categoryImage:
        "https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80",
      categoryTitle: "Islands",
    },
  },
  {
    id: uuid(),
    imageURL:
      "https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80",
    title: "8- 2024 Greenland island",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum reiciendis, magnam perspiciatis delectus provident quas quis. Mollitia ipsam quia similique quaerat, odio ipsa eius numquam necessitatibus eveniet. Quos dolore alias temporibus tempore animi sapiente dolorum, rem molestias earum praesentium inventore nobis. Doloribus ipsa itaque praesentium voluptatem ipsam repellendus accusamus iste.",
    colors: ["#4F46E5", "#F97316", "#DC2626"],
    price: "9000000",
    category: {
      categoryImage:
        "https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80",
      categoryTitle: "Islands",
    },
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

export const colors: string[] = [
  "#111827", // gray-900
  "#dc2626", // red-600
  "#2563eb", // blue-600
  "#047857", // green-700
  "#fcd34d", // yellow-300
  "#f59e0b", // yellow-500
  "#7c3aed", // purple-600
  "#6d28d9", // purple-700
  "#db2777", // pink-600
];

export const categories: ICategory[] = [
  {
    id: uuid(),
    categoryTitle: "Catergory 1",
    categoryImage:
      "https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80",
  },
  {
    id: uuid(),
    categoryTitle: "Catergory 2",
    categoryImage:
      "https://images.pexels.com/photos/1341279/pexels-photo-1341279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: uuid(),
    categoryTitle: "Catergory 3",
    categoryImage:
      "https://images.pexels.com/photos/19149595/pexels-photo-19149595/free-photo-of-facade-of-the-hawa-mahal-palace-in-jaipur-india.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: uuid(),
    categoryTitle: "Catergory 4",
    categoryImage:
      "https://images.pexels.com/photos/24446763/pexels-photo-24446763/free-photo-of-a-close-up-of-a-building-with-colorful-windows.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: uuid(),
    categoryTitle: "Catergory 5",
    categoryImage:
      "https://images.pexels.com/photos/16554762/pexels-photo-16554762/free-photo-of-clouds-in-mountains-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: uuid(),
    categoryTitle: "Catergory 6",
    categoryImage:
      "https://images.pexels.com/photos/25109751/pexels-photo-25109751/free-photo-of-a-close-up-of-a-leaf-with-orange-and-yellow-colors.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: uuid(),
    categoryTitle: "Catergory 7",
    categoryImage:
      "https://images.pexels.com/photos/1851481/pexels-photo-1851481.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: uuid(),
    categoryTitle: "Catergory 8",
    categoryImage:
      "https://images.pexels.com/photos/2402922/pexels-photo-2402922.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];
