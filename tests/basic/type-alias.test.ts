import { Category, Product } from "../../src/type-alias";

describe("Type Alias", () => {
  it("should support in typescript", () => {
    const category: Category = {
      id: "1",
      name: "Handphone",
    };

    const product: Product = {
      id: "1",
      name: "Samsung S20",
      price: 2000000,
      category: category,
    };

    product.id = 1; // union type string/number

    const product2: Product = {
      id: 2,
      name: "Poco F5",
      price: 4999000,
      category: category,
      description: "Snapdragon 7+ Gen 2", // optional properties
    };

    console.info(category);
    console.info(product);
    console.info(product2);
  });
});
