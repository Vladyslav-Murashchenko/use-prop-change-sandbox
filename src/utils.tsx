export const append = <T,>(newItem: T) => (arr: T[]) => arr.concat(newItem);

export const removeIndex = <T,>(index: number) => (arr: T[]) => [
  ...arr.slice(0, index),
  ...arr.slice(index + 1),
];

export const createIdGenerator = () => {
  let nextId = 1;

  return () => nextId++;
};
