describe("Error Handling", () => {
  class ValidationError extends Error {
    constructor(public message: string) {
      super(message);
    }
  }

  function duobleIt(value: number): number {
    if (value < 0) {
      throw new ValidationError("Value cannot be less tahn 0");
    }

    return value * 2;
  }

  it("should support", () => {
    try {
      const result = duobleIt(-1);
    } catch (e) {
      if (e instanceof ValidationError) {
        console.info(e.message);
      }
    }
  });
});
