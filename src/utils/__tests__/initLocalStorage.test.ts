import { apiArrayToObject, capitalize } from "utils/helpers";

describe("initLocalStorage.ts", () => {
  it("should return first element from array", () => {
    const arr = ["john", "doe"];

    expect(apiArrayToObject(arr)).toBe(arr[0]);
  });
});
