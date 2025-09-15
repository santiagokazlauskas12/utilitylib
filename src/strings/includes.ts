import { isString } from "@src/check";

export const includes = (value: string, search: string): boolean => {
  return isString(value) && isString(search) && value.includes(search);
};
