export type ID = string | number; // union type string/number

export type Category = {
  id: ID;
  name: string;
  description?: string; // optional propresties
};

export type Product = {
  id: ID;
  name: string;
  price: number;
  category: Category;
  description?: string; // optional propresties
};
