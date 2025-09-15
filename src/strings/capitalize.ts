import { isString } from "@src/check";

export const capitalize = (str: string): string => {
  if (!isString(str)) {
    return str;
  }
  const splittedString = str.split(" ");
  return splittedString
    .map((s) => {
      return s.charAt(0).toUpperCase() + s.slice(1);
    })
    .join(" ");
};
