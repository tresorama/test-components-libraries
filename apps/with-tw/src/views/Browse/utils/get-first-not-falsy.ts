export const getFirstNotFalsy = <O, F,>(options: O[], fallback: F) => {
  for (const option of options) {
    if (option !== null && option !== undefined) return option;
  }
  return fallback;
};