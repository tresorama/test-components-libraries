import type { Movie } from "@/lib/tmdb/tmdb.fetch";
import { useTrailerVideo } from "@/views/Browse/hooks/use-trailer-video";
import { getFirstNotFalsy } from "@/views/Browse/utils/get-first-not-falsy";
import { IconButton } from "@/views/shared/components/button/icon-button";
import { PlayIcon } from "@/views/shared/components/icons/icons";
import { AspectRatio } from "@/views/Browse/components/AspectRatio/AspectRatio";
import { useTimeout } from "./hooks/use-timeout";
import { useToggle } from "./hooks/use-toggle";
import placeholder_movie_image from '@/assets/placeholder-movie.jpg';

export const MovieCard = ({ movie }: {
  movie: Movie;
}) => {
  const [isVisibleVideo, toggleIsVisibleVideo] = useToggle();
  useTimeout(toggleIsVisibleVideo, 400);

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
      <div className="w-full overflow-hidden">
        <AspectRatio ratio={16 / 9}>
          {({ paddingBottom }) => (
            <div className="w-full relative" style={{ paddingBottom }}>
              {isVisibleVideo && (
                <div className="absolute inset-0 w-full">
                  <TrailerVideo />
                </div>
              )}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className={`
                  absolute inset-0 w-full h-full 
                  object-cover object-bottom 
                  ${isVisibleVideo ? "animate-[fade-out_1s_2s_1_both]" : ""}
                `}
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
          <span className="text-green-500 text-sm">95% compatibile</span>
          <div className="flex flex-wrap items-baseline">
            <span className="px-1 text-sm leading-none border">16+</span>
            <span className="px-2 text-sm leading-none">5 stagioni</span>
            <span className="px-1 text-sm leading-none border">HD</span>
          </div>
        </div>
        <div className="mt-2 px-2">
          <div className="flex flex-wrap gap-x-2">
            {['Profondo', 'Dramma', "Corridoi del potere"].map((tag, i) => (
              <span key={tag} className="text-gray-400 text-sm">
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

const TrailerVideo = () => {
  const TrailerVideo = useTrailerVideo({ videoId: "DpJsmKhp9yo", height: '100%' });
  return <TrailerVideo />;
};