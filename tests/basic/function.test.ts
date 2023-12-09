describe("Function", () => {
  it("should support in typescript", () => {
    function sayHello(name: string): string {
      return `Hello ${name}`;
    }

    function printHello(name: string): void {
      console.info(`Hello ${name}`);
    }

    printHello("Aji");
  });

  it("should support default value", () => {
    function sayHello(name: string = "Guest"): string {
      return `Hello ${name}`;
    }

    expect(sayHello()).toBe("Hello Guest");
    expect(sayHello("Aji")).toBe("Hello Aji");
  });

  it("should support rest parameter", () => {
    function sum(...values: number[]): number {
      let total = 0;
      for (let value of values) {
        total += value;
      }
      return total;
    }

    expect(sum(1, 2, 3, 4, 5)).toBe(15);
  });

  it("should support optional parameter", () => {
    function sayHello(firstName: string, lastName?: string): string {
      if (lastName) {
        return `Hello ${firstName} ${lastName}`;
      }
      return `Hello ${firstName}`;
    }

    expect(sayHello("Aji")).toBe("Hello Aji");
    expect(sayHello("Aji", "Muhammad")).toBe("Hello Aji Muhammad");
  });

  it("should support function overloading", () => {
    function callMe(value: string): string;
    function callMe(value: number): number;
    function callMe(value: any): any {
      if (typeof value === "string") {
        return value.toUpperCase();
      } else if (typeof value === "number") {
        return value * 10;
      }
    }

    expect(callMe("aji")).toBe("AJI");
    expect(callMe(10)).toBe(100);
  });

  it("should function as parameter", () => {
    function sayHello(name: string, filter: (name: string) => string): string {
      return `Hello ${filter(name)}`;
    }

    function toUpper(value: string): string {
      return value.toUpperCase();
    }

    expect(sayHello("Aji", toUpper)).toBe("Hello AJI");
    expect(
      sayHello("Aji", (value: string): string => value.toUpperCase())
    ).toBe("Hello AJI");
  });
});
