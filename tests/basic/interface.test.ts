import { Employee, Manager } from "../../src/employee";
import { Person } from "../../src/person";
import { Seller } from "../../src/seller";

describe("Interface", () => {
  it("should support in typescript", () => {
    const seller: Seller = {
      id: 1,
      name: "Toko AZ",
      nib: "01234567890",
      npwp: "0987654321",
    };
    seller.name = "Toko Aji";
    // seller.npwp = "01234567890"
    console.info(seller);
  });

  it("should support function interface", () => {
    interface addFucntion {
      (value1: number, value2: number): number;
    }

    const add: addFucntion = (value1: number, value2: number): number => {
      return value1 + value2;
    };

    expect(add(2, 3)).toBe(5);
  });

  it("should support indexable interface", () => {
    interface StringArray {
      [index: number]: string;
    }

    const names: StringArray = ["Aji", "Budi", "Dani"];
    console.info(names);
  });

  it("should support indexable interface for non index number", () => {
    interface StringDictionary {
      [key: string]: string;
    }

    const dictionary: StringDictionary = {
      name: "Aji",
      address: "Indonesia",
    };

    expect(dictionary["name"]).toBe("Aji");
    expect(dictionary["address"]).toBe("Indonesia");
  });

  it("should support extend interface", () => {
    const employee: Employee = {
      id: "1",
      name: "Aji",
      division: "IT",
    };

    const manager: Manager = {
      id: "1",
      name: "Aji",
      division: "IT",
      numberOfEmployees: 5,
    };

    console.info(employee);
    console.info(manager);
  });

  it("should support function in interface", () => {
    const person: Person = {
      name: "Aji",
      // sayHello: function (name: string): string {
      //   return `Hello ${name} my name is ${this.name}`;
      // },
      sayHello: (name: string): string => {
        return `Hello ${name} my name is ${person.name}`;
      },
    };

    console.info(person.sayHello("Budi"));
  });

  it("should support intersection types", () => {
    interface HasName {
      name: string;
    }

    interface HasId {
      id: string;
    }

    type Domain = HasId & HasName;

    const domain: Domain = {
      id: "1",
      name: "Aji",
    };

    console.info(domain);
  });

  it("should support type assertion", () => {
    const person: any = {
      name: "Aji",
      age: 20,
    };

    const person2: Person = person as Person;
    // person2.sayHello("Budi");
    console.info(person2);
  });
});
