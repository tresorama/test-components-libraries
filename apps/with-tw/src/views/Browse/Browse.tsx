import React from "react";
import type { PageProps } from "@/pages/browse";
import { AvatarIcons, BellIcon, InfoIcon, NetflixIcon, PlayIcon, SearchIcon } from "@/views/shared/components/Icons/Icons";
import { Button } from "@/views/shared/components/Button/Button";
import { useScrollPosition } from "./hooks/use-scroll-position";
import { useTrailerVideo } from "./hooks/use-trailer-video";
import { HoverTrapRenderer } from "./components/HoverTrap/HoverTrapRenderer";
import { MoviesRow } from "./components/MoviesRow/MoviesRow";

export const BrowseView = ({ movies }: PageProps) => {

  return (
    <>
      <div className="min-h-[2000px] w-screen bg-zinc-900 text-white">

        {/* DEBUG */}
        {/* <pre>{JSON.stringify(movies, null, 2)}</pre> */}

        {/* NAV TOP BAR */}
        <div className="relative z-50">
          <TopNavBar />
        </div>

        {/* HERO */}
        <div className="relative z-0">
          <Hero />
        </div>

        {/* STACKS OF TITLES  */}
        <div className="relative z-10">
          <MoviesRow
            title="New Arrivals"
            movies={movies.new_arrivals}
          />
          <MoviesRow
            title="XXX, continua to watch:"
            movies={movies.continue_to_watch}
          />
          <MoviesRow
            title="Trendings Now"
            movies={movies.trendings_now}
          />
          <MoviesRow
            title="Sitcoms"
            movies={movies.sitcoms}
          />
          <MoviesRow
            title="Documentaries"
            movies={movies.documentaries}
          />
        </div>

        {/* MOVIE CARD HOVER TRAP RENDERER */}
        <div className="relative z-20">
          <HoverTrapRenderer />
        </div>

      </div >
    </>
  );
};

// Compoenents
const TopNavBar = () => {
  const scrollPosition = useScrollPosition();

  return (
    <>
      <div className={`fixed top-0 left-0 right-0 h-[70px]  ${scrollPosition.isAtTop ? 'bg-gradient-to-b from-black' : 'bg-black'}`}>
        <div className="px-4 h-full flex items-center gap-8">
          {/* LOGO */}
          <div className="w-[80px]">
            <NetflixIcon />
          </div>
          {/* NAV */}
          <div className="flex gap-2">
            {['Sfoglia'].map(item_name => (
              <div key={item_name} className="text-sm">
                <span>{item_name}</span>
              </div>
            ))}
          </div>
          {/* BUTTONS */}
          <div className="ml-auto">
            <div className="flex items-center gap-6">
              <div className="w-[28px]">
                <SearchIcon />
              </div>
              <div className="w-[30px]">
                <BellIcon />
              </div>
              <div className="w-[50px] rounded overflow-hidden">
                {(() => {
                  const Icon = AvatarIcons[0];
                  return <Icon />;
                })()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Hero = () => {
  const ratio = (ratio: number) => Math.round((1 / ratio * 100)).toFixed(0);
  const videoHeight = ratio(16 / 9);
  const c = "rgb(24 24 27 / 1)";

  const TrailerVideo = useTrailerVideo({
    videoId: "DpJsmKhp9yo",
    width: '100%',
    height: '100%',
  });

  return (
    <div className={`relative h-[${videoHeight}vw] min-h-[300px] max-h-[80vh]`}>
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <TrailerVideo />
      </div>
      <div
        className="absolute inset-0 bottom-[-50vh] pointer-events-none"
        style={{
          background: `
            linear-gradient(to right, ${c}, transparent 0%), 
            linear-gradient(to left, ${c}, transparent 0%), 
            linear-gradient(to bottom, ${c}, transparent 0%), 
            linear-gradient(to top, ${c} 55%, transparent ) 
            `
        }}
      />
      <div className="absolute inset-0 px-4 flex flex-col justify-center">
        <div className="max-w-[10ch] text-2xl font-semibold">Pepsi dove è il mio jet ?</div>
        <div className="mt-2 max-w-[45ch] text-xs">Un ventenne tenta di vincere un jet da combattimento in un concorso della Pepsi, dando il via a una battaglia giudiziaria decisamente impari che passerà alla storia.</div>
        <div className="mt-4 flex gap-3">
          <Button
            text="Riproduci"
            leftIcon={<PlayIcon />}
            color="primary"
          />
          <Button
            text="Altre Info"
            leftIcon={<InfoIcon />}
          />
        </div>
      </div>
    </div>
  );
};