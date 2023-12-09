describe("Polymorphism", () => {
  class Employee {
    constructor(public name: string) {}
  }

  class Manager extends Employee {}

  class VicePresident extends Manager {}

  function sayHello(employee: Employee): void {
    if (employee instanceof VicePresident) {
      const vp = employee as VicePresident;
      console.info(`Hello VP ${vp.name}`);
    } else if (employee instanceof Manager) {
      const manager = employee as Manager;
      console.info(`Hello Manager ${manager.name}`);
    } else {
      console.info(`Hello Employee ${employee.name}`);
    }
  }

  it("should support", () => {
    let employee: Employee = new Employee("Aji");
    console.info(employee);

    employee = new Manager("Aji");
    console.info(employee);

    employee = new VicePresident("Aji");
    console.info(employee);
  });

  it("shouldsupport method parameter polymorpism ", () => {
    sayHello(new Employee("Aji"));
    sayHello(new Manager("Budi"));
    sayHello(new VicePresident("Caca"));
  });
});
