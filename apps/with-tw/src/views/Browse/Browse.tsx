import React from "react";
import type { PageProps } from "@/pages/browse";
import { SVGIcon } from "@/views/shared/components/Icons/SVGIcon";
import { AvatarIcons, BellIcon, InfoIcon, NetflixIcon, PlayIcon, SearchIcon } from "@/views/shared/components/Icons/Icons";
import { Button } from "@/views/shared/components/Button/Button";
import { useScrollPosition } from "./hooks/use-scroll-position";
import { useTrailerVideo } from "./hooks/use-trailer-video";
import { HoverTrapRenderer } from "./components/HoverTrap/HoverTrapRenderer";
import { MoviesRow } from "./components/MoviesRow/MoviesRow";

export const BrowseView = ({ movies }: PageProps) => {
  const TrailerVideo = useTrailerVideo({ videoId: "DpJsmKhp9yo" });

  return (
    <>
      <div className="min-h-[2000px] w-screen bg-zinc-900 text-white">

        {/* DEBUG */}
        {/* <pre>{JSON.stringify(movies, null, 2)}</pre> */}

        {/* NAV TOP BAR */}
        <TopNavBar />

        {/* HERO */}
        <div className="relative z-0 min-h-[300px] overflow-hidden">
          <div className="relative pointer-events-none">
            <TrailerVideo />
          </div>
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
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_22vw_0vw_black]" />
        </div>

        {/* STACKS OF TITLES  */}
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
        <HoverTrapRenderer />

      </div >
    </>
  );
};

// Compoenents
const TopNavBar = () => {
  const scrollPosition = useScrollPosition();

  return (
    <>
      <div className={`fixed z-50 top-0 left-0 right-0 h-[70px]  ${scrollPosition.isAtTop ? 'bg-gradient-to-b from-black' : 'bg-black'}`}>
        <div className="px-4 h-full flex items-center gap-8">
          {/* LOGO */}
          <div className="w-[80px]">
            <NetflixIcon />
            {/* <SVGIcon icon={<NetflixIcon />} /> */}
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
                {/* <SVGIcon icon={<SearchIcon />} /> */}
              </div>
              <div className="w-[30px]">
                <BellIcon />
                {/* <SVGIcon icon={<BellIcon />} /> */}
              </div>
              <div className="w-[50px] rounded overflow-hidden">
                {(() => {
                  const Icon = AvatarIcons[0];
                  return <Icon />;
                })()}
                {/* <SVGIcon icon={AvatarIcons[0]} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};