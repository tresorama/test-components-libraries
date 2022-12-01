import { useRef, useEffect, useMemo } from "react";
import { debouncer } from "./utils/debounce";

export const useDebouncer = ({ time }: { time: number; }) => {
  const debounced = useRef(debouncer({ time }));

  useEffect(() => {
    const _debounced = debounced.current;
    return () => { _debounced.clear(); };
  }, []);

  return useMemo(() => ({
    add: debounced.current.add,
    clear: debounced.current.clear,
  }), []);
};
