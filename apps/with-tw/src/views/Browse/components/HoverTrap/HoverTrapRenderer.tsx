import { useScrollPosition } from "@/views/Browse/hooks/use-scroll-position";
import { hoverTrapStore } from "./store/HoverTrap.store";
import { MovieCard } from "./components/MovieCard/MovieCard";
import { AnimatePresence, motion } from "framer-motion";
import { useDebouncer } from "../../hooks/use-debouncer";


export const HoverTrapRenderer = () => {
  const hoveredItem = hoverTrapStore.useStore(s => s.hoveredItem);
  return (
    <div className="fixed inset-0 pointer-events-none">
      <AnimatePresence>
        {hoveredItem !== null && <Item hoveredItem={hoveredItem} />}
      </AnimatePresence>
    </div>
  );
};

type HoveredItem = Exclude<ReturnType<typeof hoverTrapStore['get']>['hoveredItem'], null>;
const useRerenderOnScroll = useScrollPosition;

const Item = ({ hoveredItem }: { hoveredItem: HoveredItem; }) => {
  const removeHoveredItem = hoverTrapStore.useStore(s => s.removeHoveredItem);
  useRerenderOnScroll();
  const debounceRemove = useDebouncer({ time: 200 });

  // calculate where to put the card
  const { node, movie } = hoveredItem;
  const ZOOM = 1.35;
  const clientRect = node.getBoundingClientRect();
  const hAligned: 'l' | 'c' | 'r' = (() => {
    const hslice = clientRect.left / window.innerWidth;
    if (hslice < 0.33) return 'l';
    if (hslice < 0.60) return 'c';
    return 'r';
  })();
  const width = clientRect.width * ZOOM;
  const height = clientRect.height * ZOOM;
  const top = clientRect.top - (clientRect.height * 0.2);
  const left = {
    "l": clientRect.left,
    "c": clientRect.left - ((width - clientRect.width) / 2),
    "r": clientRect.left - (width - clientRect.width),
  }[hAligned];

  // calculate animation props
  const transformOrigin = {
    "l": 'center left',
    "c": "center center",
    "r": "center right"
  }[hAligned];

  return (
    <motion.div
      onMouseLeave={() => { debounceRemove.add(removeHoveredItem); }}
      className="pointer-events-auto absolute"
      style={{
        top,
        left,
        width,
        height,
        transformOrigin,
      }}
      initial={{
        scale: 1 / ZOOM,
      }}
      animate={{
        scale: 1,
      }}
      exit={{
        scale: 1 / ZOOM
      }}
      transition={{
        type: 'spring',
        mass: 0.15,
      }}
    >
      <MovieCard movie={movie} />
    </motion.div>
  );
}


