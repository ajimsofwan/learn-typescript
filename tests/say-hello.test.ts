import { sayHello } from "../src/say-hello";

describe("sayHello", function () {
  it("should return hello aji", function () {
    expect(sayHello("aji")).toBe("Hello aji");
  });
});
