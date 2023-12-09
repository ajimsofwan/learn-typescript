import { MathUtil } from "../../src/object-oriented/math-util";

describe("Namespace", () => {
  it("should support", () => {
    console.info(MathUtil.PI);
    console.info(MathUtil.sum(1, 2, 3, 4, 5));
  });
});
