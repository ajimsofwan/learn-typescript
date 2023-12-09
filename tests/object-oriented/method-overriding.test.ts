describe("Method Overrrifing", () => {
  class Employe {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    sayHello(name: string): void {
      console.info(`Hello ${name} my name is ${this.name}`);
    }
  }

  class Manager extends Employe {
    // method overriding
    // sayHello(name: string): void {
    //   console.info(`Hello ${name} my name is ${this.name}. I am your manager`);
    // }

    // super method
    sayHello(name: string): void {
      super.sayHello(name);
      console.info(`And I am your manager`);
    }
  }

  it("should support", () => {
    const employee = new Employe("Aji");
    employee.sayHello("Budi");

    const manager = new Manager("Aji");
    manager.sayHello("Budi");
  });
});
