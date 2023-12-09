describe("Properties", () => {
  class Customer {
    readonly id: number;
    name: string = "Guest";
    age?: number;

    constructor(id: number, name: string) {
      this.id = id;
      this.name = name;
    }

    sayHello(name: string): void {
      console.info(`Hello ${name} my name is ${this.name}`);
    }
  }

  it("should can have properties", () => {
    const customer = new Customer(1, "Aji");
    console.info(customer);

    customer.name = "Jhon";
    customer.age = 20;

    console.info(customer);
  });

  it("should have method", () => {
    const customer = new Customer(1, "Aji");

    customer.sayHello("Budi");
  });
});
