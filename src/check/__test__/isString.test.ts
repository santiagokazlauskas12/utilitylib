import { it, expect } from "vitest";
import { isString } from "../isString";

it("isString", () => {
  expect(isString("")).toBe(true);
  expect(isString(1)).toBe(false);
  expect(isString(null)).toBe(false);
  expect(isString(undefined)).toBe(false);
});
