import React from "react";
import type { GetStaticProps, NextPage } from "next";
import { fetchMoviesByTerm } from "../lib/tmdb/tmdb.fetch";
import { BrowseView } from "@/views/Browse/Browse";
import type { Movie } from "../lib/tmdb/tmdb.fetch";

// Data Fetch
export type PageProps = {
  movies: {
    new_arrivals: Movie[];
    continue_to_watch: Movie[];
    trendings_now: Movie[];
    sitcoms: Movie[];
    documentaries: Movie[];
  };
};
export const getStaticProps: GetStaticProps<PageProps> = async () => {
  return {
    props: {
      movies: {
        new_arrivals: await fetchMoviesByTerm('a'),
        continue_to_watch: await fetchMoviesByTerm('b'),
        trendings_now: await fetchMoviesByTerm('c'),
        sitcoms: await fetchMoviesByTerm('d'),
        documentaries: await fetchMoviesByTerm('e'),
      }
    }
  };
};

// Main Component
const Page: NextPage<PageProps> = (props) => <BrowseView {...props} />;
export default Page;
