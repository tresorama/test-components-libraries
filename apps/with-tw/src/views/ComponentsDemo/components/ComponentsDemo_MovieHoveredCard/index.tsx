import { Movie } from "@/lib/tmdb/tmdb.fetch";
import { MovieCard } from "@/views/Browse/components/HoverTrap/components/MovieCard/MovieCard";
import { demo_data } from "./demo-data";

const demo_movie: Movie = demo_data.movies.trendings_now[0];

export const ComponentsDemo_MovieHoveredCard = () => (
  <>
    <div className="flex flex-col gap-6">

      <div className="w-full">
        <MovieCard
          movie={demo_movie}
        />
      </div>

      <div className="w-[40vw] min-w-[50px] max-w-[220px]">
        <MovieCard
          movie={demo_movie}
        />
      </div>

      <div className="w-[60vw] min-w-[50px] max-w-[300px]">
        <MovieCard
          movie={demo_movie}
        />
      </div>
    </div>
  </>
);
