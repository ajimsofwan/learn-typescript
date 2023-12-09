describe("Super Constructor", () => {
  class Person {
    name: string;

    constructor(name: string) {
      this.name = name;
    }
  }

  class Employe extends Person {
    departement: string;

    constructor(name: string, departement: string) {
      super(name);
      this.departement = departement;
    }
  }

  it("should support", () => {
    const employee = new Employe("Aji", "Dev");
    console.info(employee.name);
    console.info(employee.departement);
  });
});
