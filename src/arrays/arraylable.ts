export const arraylable = (array: unknown[] | null): unknown[] | [] => {
  return Array.isArray(array) ? array : [];
};
