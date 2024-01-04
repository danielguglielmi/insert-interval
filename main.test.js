const { insertInterval } = require("./main");

describe("Testing Insert Interval", () => {
  it("Testing Interval - input: [[1, 3], [6, 9], [12, 16]] - merge: [2, 5]", () => {
    const input = [
      [1, 3],
      [6, 9],
      [12, 16],
    ];
    const merge = [2, 5];
    const expectedOutput = [
      [1, 5],
      [6, 9],
      [12, 16],
    ];
    const result = insertInterval(input, merge);
    expect(result).toEqual(expectedOutput);
  });

  it("Testing Interval - input: [[1,2],[3,5],[6,7],[8,10],[12,16]] - merge: [4, 9]", () => {
    const input = [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16],
    ];
    const merge = [4, 9];
    const expectedOutput = [
      [1, 2],
      [3, 10],
      [12, 16],
    ];
    const result = insertInterval(input, merge);
    expect(result).toEqual(expectedOutput);
  });

  it("Testing Interval - input: [ [1, 3], [6, 9],] - merge: [2, 5]", () => {
    const input = [
      [1, 3],
      [6, 9],
    ];
    const merge = [2, 5];
    const expectedOutput = [
      [1, 5],
      [6, 9],
    ];
    const result = insertInterval(input, merge);
    expect(result).toEqual(expectedOutput);
  });
});
