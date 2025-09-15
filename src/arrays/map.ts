import { arraylable } from "./arraylable";

export const map = <T, U>(array: T[], callback: (value: T) => U): U[] => {
  if (arraylable(array) && typeof callback === "function") {
    return array.map(callback);
  } else {
    return [];
  }
};
