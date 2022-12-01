import create from 'zustand';
import type { Movie } from "@/lib/tmdb/tmdb.fetch";
import { debouncer } from "../../../hooks/use-debouncer/utils/debounce";

// State + Actions
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
const initialHoverTrapState: HoverTrapState = {
  hoveredItem: null
};

// Store
const debouncedAdd = debouncer({ time: 150 });
const useStore = create<HoverTrapState & HoverTrapActions>((set, get) => ({
  ...initialHoverTrapState,
  setHoveredItem: (item) => {
    debouncedAdd.add(() => {
      set(prev => ({ ...prev, hoveredItem: item }));
    });
  },
  removeHoveredItem: () => set(prev => ({ ...prev, hoveredItem: null }))
})
);

export const hoverTrapStore = {
  useStore,
  get: useStore.getState,
  set: useStore.setState,
  subscribe: useStore.subscribe,
  destroy: useStore.destroy,
};
