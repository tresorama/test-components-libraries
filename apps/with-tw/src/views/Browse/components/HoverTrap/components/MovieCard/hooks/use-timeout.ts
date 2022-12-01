import { useCallback, useEffect, useRef } from "react";

export const useTimeout = (
  callback: (...args: any[]) => void,
  timeInMs: number,
) => {
  const timer = useRef<number | NodeJS.Timer>();
  useEffect(() => {
    timer.current = setTimeout(callback, timeInMs);
    return () => {
      clearTimeout(timer.current);
    };
  }, [callback, timeInMs]);
  const clearTimer = useCallback(() => clearInterval(timer.current), []);
  return clearTimer;
};
