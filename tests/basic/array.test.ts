describe("Array", function () {
  it("should same with javascript", function () {
    const names: string[] = ["aji", "budi", "dani"];
    const values: number[] = [1, 2, 3];

    console.info(names);
    console.info(values);
  });

  it("should support read only array", function () {
    const hobies: ReadonlyArray<string> = ["Membaca", "Menulis"];

    console.info(hobies);
    console.info(hobies[0]);
    console.info(hobies[1]);

    // hobies[0] = "Menggambar";
  });

  it("should support tupple", function () {
    const person: readonly [string, string, number] = ["Aji", "Muhammad", 20];

    console.info(person);

    // person[0] = "Budi";
  });
});
