import { useScrollPosition } from "@/views/Browse/hooks/use-scroll-position";
import { hoverTrapStore } from "./store/HoverTrap.store";
import { MovieCard } from "./components/MovieCard/MovieCard";

const useRerenderOnScroll = useScrollPosition;

export const HoverTrapRenderer = () => {
  const hoveredItem = hoverTrapStore.useStore(s => s.hoveredItem);
  const removeHoveredItem = hoverTrapStore.useStore(s => s.removeHoveredItem);
  useRerenderOnScroll();
  if (hoveredItem === null) return <></>;

  // calculate where to put the card
  const { node, movie } = hoveredItem;
  const clientRect = node.getBoundingClientRect();
  const hAligned: 'l' | 'c' | 'r' = (() => {
    const hslice = clientRect.left / window.innerWidth;
    if (hslice < 0.33) return 'l';
    if (hslice >= 0.33 && hslice < 0.66) return 'c';
    return 'r';
  })();
  const width = clientRect.width * 1.35;
  const height = clientRect.height;
  const top = clientRect.top + (clientRect.height * 0.5);
  const left = {
    "l": clientRect.left,
    "c": clientRect.left - ((width - clientRect.width) / 2),
    "r": clientRect.left - (width - clientRect.width),
  }[hAligned];
  const transformOrigin = {
    "l": 'top left',
    "c": "top center",
    "r": "top right"
  }[hAligned];

  return (
    <div className="fixed inset-0 pointer-events-none">
      <style jsx global>{`
      @keyframes expand {
        from { transform: scale(0.74);}
        to { transform: scale(1); }
      }
      `}
      </style>
      <div
        onMouseLeave={removeHoveredItem}
        className="pointer-events-auto animate-[expand_250ms_ease-in-out] flex items-center"
        style={{
          position: 'absolute',
          width,
          height,
          top,
          left,
          transformOrigin,
        }}
      >
        <div className="absolute w-full">
          <MovieCard movie={movie} />
        </div>
      </div>
    </div>
  );
};


