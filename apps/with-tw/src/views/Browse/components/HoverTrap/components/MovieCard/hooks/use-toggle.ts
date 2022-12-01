import { useCallback, useState } from "react";

export const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState);
  const toggleState = useCallback(() => setState(prev => !prev), []);
  return [
    state,
    toggleState,
    setState,
  ] as const;
};
