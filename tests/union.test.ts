describe("Union Type", function () {
  it("should support in typescript", function () {
    let sample: number | string | boolean = "Aji";
    console.info(sample);

    sample = 100;
    console.info(sample);

    sample = true;
    console.info(sample);

    // sample = [];
  });

  it("should support typeof operator", () => {
    function process(value: number | string | boolean) {
      if (typeof value === "string") {
        return value.toUpperCase();
      } else if (typeof value === "number") {
        return value + 2;
      } else if (typeof value === "boolean") {
        return !value;
      }
    }

    expect(process("Aji")).toBe("AJI");
    expect(process(100)).toBe(102);
    expect(process(true)).toBe(false);
  });
});
