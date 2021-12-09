import { apiArrayToObject, capitalize } from "utils/helpers";

describe("helpers.ts", () => {
  it("should return first element from array", () => {
    const arr = ["john", "doe"];

    expect(apiArrayToObject(arr)).toBe(arr[0]);
  });

  it("should capitalize first letter in string", () => {
    const letter = "t";
    const capitalized = capitalize(letter);

    expect(capitalized).toBe(letter.toUpperCase());
  });
});
