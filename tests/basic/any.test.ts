describe("Any Type", function () {
  it("should support in typescript", function () {
    const person: any = {
      id: 1,
      name: "Aji Muhammad Sofwan ",
      age: 20,
    };

    person.address = "Indonesia";

    console.info(person);
  });
});
