import React from "react";
import { debouncer } from "./utils/debounce";

export const useDebouncer = ({ time }: { time: number; }) => {
  const debounced = React.useRef(debouncer({ time }));

  React.useEffect(() => {
    const _debounced = debounced.current;
    return () => { _debounced.clear(); };
  }, []);

  return {
    add: debounced.current.add,
    clear: debounced.current.clear,
  };
};
