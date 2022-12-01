import type { Movie } from "@/lib/tmdb/tmdb.fetch";
import { useDebouncer } from "../../hooks/use-debouncer";
import { getFirstNotFalsy } from "../../utils/get-first-not-falsy";
import { AspectRatio } from "../AspectRatio/AspectRatio";
import { useHoverTrap } from "../HoverTrap/HoverTrap.context";
import placeholder_movie_image from '@/assets/placeholder-movie.jpg';

export const MoviesRow = ({ title, movies }: {
  title: string,
  movies: Movie[];
}) => (
  <div className="w-full">
    <div className="px-4 pt-5 pb-1">
      <span className="">{title}</span>
    </div>
    <div className="w-full overflow-auto pl-4">
      <div className="flex gap-2">
        {movies.map(movie => (
          <MovieRowItem
            key={movie.id}
            movie={movie}
          />
        ))}
      </div>
    </div>
  </div>
);

const MovieRowItem = ({ movie }: {
  movie: Movie;
}) => {
  const hoverTrap = useHoverTrap();
  const debounceHover = useDebouncer({ time: 300 });
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const node = e.currentTarget;
    debounceHover.add(() => {
      hoverTrap.setHoveredItem({ node, movie });
    });
  };
  const handleMouseLeave = () => {
    debounceHover.clear();
  };

  return (
    <div
      className=""
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-[30vw] min-w-[50px] max-w-[220px] bg-red-100 text-black">
        <AspectRatio ratio={16 / 9}>
          {({ paddingBottom }) => (
            <div className="w-full relative" style={{ paddingBottom }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="absolute inset-0 w-full h-full object-cover object-bottom"
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
    </div>
  );
};
