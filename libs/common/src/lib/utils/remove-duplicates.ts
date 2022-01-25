/**
 * Removes duplicates using a set
 */
export const removeDuplicates = <T>(arr: Array<T>): Array<T> => {
  if (!arr) {
    return [];
  }

  return Array.from(arr.reduce((acc, el) => acc.add(el), new Set<T>()));
};
