import type { Movie } from "@/lib/tmdb/tmdb.fetch";
import { IconButton } from "@/views/shared/components/button/icon-button";
import { PlayIcon } from "@/views/shared/components/icons";
import placeholder_movie_image from '@/assets/placeholder-movie.jpg';
import { getFirstNotFalsy } from "../../utils/get-first-not-falsy";
import { AspectRatio } from "../AspectRatio/AspectRatio";
import { useHoverTrap } from "./HoverTrap.context";
import { useTrailerVideo } from "../../hooks/use-trailer-video";

export const HoverTrapRenderer = () => {
  const { hoveredItem, removeHoveredItem } = useHoverTrap();
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
const MovieCard = ({ movie }: {
  movie: Movie;
}) => {
  const TrailerVideo = useTrailerVideo({ videoId: "DpJsmKhp9yo", height: '100%' });

  return (
    <div className="w-full shadow-[0_0_100px_black] rounded-lg">
      {/* IMAGE */}
      <style jsx global>{`
      @keyframes fade-out {
        from { opacity: 1;}
        to { opacity: 0; }
      }
      `}
      </style>
      <div className="w-full">
        <AspectRatio ratio={16 / 9}>
          {({ paddingBottom }) => (
            <div className="w-full relative" style={{ paddingBottom }}>
              <div className="absolute inset-0 w-full">
                <TrailerVideo />
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="absolute inset-0 w-full h-full object-cover object-bottom animate-[fade-out_300ms_2s_1_both]"
                alt={movie.title}
                src={getFirstNotFalsy([
                  movie.images.poster.w342,
                  movie.images.poster.w185,
                  movie.images.poster.original
                ], placeholder_movie_image.src)}
              />
            </div>
          )}
        </AspectRatio>
      </div>
      {/* DETAILS */}
      <div className="pb-4 bg-zinc-800">
        <div className="px-2 py-2 flex gap-2">
          <IconButton color="primary" size="sm" icon={<PlayIcon />} />
          <IconButton color="outline" size="sm" icon={<PlayIcon />} />
          <IconButton color="outline" size="sm" icon={<PlayIcon />} />
          <div className="ml-auto">
            <IconButton color="outline" size="sm" icon={<PlayIcon />} />
          </div>
        </div>
        <div className="mt-2 px-2">
          <span className="text-green-500 text-xs">95% compatibile</span>
          <div className="flex flex-wrap items-baseline">
            <span className="px-1 text-xs leading-none border">16+</span>
            <span className="px-2 text-xs leading-none">5 stagioni</span>
            <span className="px-1 text-xs leading-none border">HD</span>
          </div>
        </div>
        <div className="mt-2 px-2">
          <div className="flex flex-wrap gap-x-2">
            {['Profondo', 'Dramma', "Corridoi del potere"].map((tag, i) => (
              <span key={tag} className="text-gray-400 text-xs">
                {i !== 0 && (<span>・ </span>)}
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
