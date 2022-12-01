import React from "react";
import type { Movie } from "@/lib/tmdb/tmdb.fetch";
import { useDebouncer } from "../../hooks/use-debouncer";

// Context Value
type HoverTrapState = {
  hoveredItem: null | {
    node: HTMLElement;
    movie: Movie;
  };
};
type HoverTrapActions = {
  setHoveredItem: (item: HoverTrapState['hoveredItem']) => void;
  removeHoveredItem: () => void;
};
type HoverTrapContext = HoverTrapState & HoverTrapActions;
const initialHoverTrapState: HoverTrapState = {
  hoveredItem: null
};

// Context
const HoverTrapContext = React.createContext<HoverTrapContext>({
  ...initialHoverTrapState,
  setHoveredItem: () => { },
  removeHoveredItem: () => { },
});

// Init Context Hook
const useHoverTrapContext = (): HoverTrapContext => {
  const [state, setState] = React.useState<HoverTrapState>(initialHoverTrapState);
  const debouncedAdd = useDebouncer({ time: 150 });
  const actions: HoverTrapActions = {
    setHoveredItem: (item) => {
      if (state.hoveredItem !== null) actions.removeHoveredItem();
      debouncedAdd.add(() => {
        setState(prev => ({ ...prev, hoveredItem: item }));
      });
    },
    removeHoveredItem: () => {
      setState(prev => ({ ...prev, hoveredItem: null }));
    }
  };
  return { ...state, ...actions };
};

// Consume Context Hook
export const useHoverTrap = () => React.useContext(HoverTrapContext);

// Consume Context Provider
export const HoverTrapProvider = ({ children }: { children: React.ReactNode; }) => (
  <HoverTrapContext.Provider value={useHoverTrapContext()}>
    {children}
  </HoverTrapContext.Provider>
);
