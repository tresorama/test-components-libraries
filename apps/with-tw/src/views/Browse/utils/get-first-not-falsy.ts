export const getFirstNotFalsy = <O, T,>(options: O[], fallback: T) => {
  for (const option of options) {
    if (option) return option;
  }
  return fallback;
};