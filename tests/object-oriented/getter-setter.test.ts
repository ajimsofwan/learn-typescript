describe("Gettet and Setter", () => {
  class Category {
    _name?: string | null;

    get name(): string | null {
      if (this._name) {
        return this._name;
      }
      return null;
    }

    set name(value: string) {
      if (value !== "") {
        this._name = value;
      }
    }
  }

  it("should support in class", () => {
    const category = new Category();
    console.info(category.name);

    category.name = "News";
    console.info(category.name);

    category.name = "";
    console.info(category.name);
  });
});
