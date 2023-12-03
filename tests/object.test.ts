describe("Object", () => {
  it("should should support in typescript", () => {
    const person: { id: string; name: string; hobbies?: string[] } = {
      id: "1",
      name: "Aji",
    };

    console.info(person);

    person.id = "2";
    person.name = "Budi";

    console.info(person);
  });
});
