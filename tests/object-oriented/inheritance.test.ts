describe("Inherintance", () => {
  // parent class
  class Employee {
    name: string;

    constructor(name: string) {
      this.name = name;
    }
  }

  class Manager extends Employee {}

  class Director extends Manager {}

  it("should support", () => {
    const employee = new Employee("Aji");
    console.info(employee.name);

    const manager = new Manager("Budi");
    console.info(manager.name);

    const director = new Director("Caca");
    console.info(director.name);
  });
});
