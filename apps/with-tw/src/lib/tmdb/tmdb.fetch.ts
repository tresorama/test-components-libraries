// Types
type TMDB_Config = {
  images: {
    base_url: string,
    secure_base_url: string,
    backdrop_sizes: [
      "w300",
      "w780",
      "w1280",
      "original"
    ],
    logo_sizes: string[],
    poster_sizes: [
      "w92",
      "w154",
      "w185",
      "w342",
      "w500",
      "w780",
      "original"
    ],
    profile_sizes: string[],
    still_sizes: string[],
  },
  change_keys: string[],
};
type TMDB_Movie = {
  adult: boolean, // false
  backdrop_path: null | string,// "/8c3fXdcfKEXijVcvptvp7g6jAkq.jpg",
  genre_ids: number[], //  [ 99 ]
  id: number, // 367853
  original_language: string, // "en"
  original_title: string, // "Aankomst der vredesconferentie te Haarlem, 4 Juni 1899"
  overview: string,// "Reportage about the visit that the delegates to the First Peace Conference at The Hague made to the floral parade in Haarlem. [...] Although the original goal – a treaty on disarmament – was not reached, other treaties were indeed agreed upon, for example a ban on the use of poison gas and the dropping of bombs from balloons. [...]The group, consisting of 175 guests, made a special train trip to Haarlem on June 4, where they visited the floral parade and the Frans Hals Museum."
  popularity: number, // 5.467
  poster_path: null | string, //"/8dvWQ9yLfjenonJJ3gUluUP94pE.jpg"
  release_date: string, //"1899-11-11",
  title: string, //"Arrival of the Peace Conference at Haarlem, 4 June 1899",
  video: boolean, // false
  vote_average: number, // 2.5,
  vote_count: number, // 2
};
export type Movie = {
  id: TMDB_Movie['id'],
  title: TMDB_Movie['title'],
  original_title: TMDB_Movie['original_title'],
  overview: TMDB_Movie['overview'],
  images: {
    backdrop: Record<TMDB_Config['images']['backdrop_sizes'][number], null | string>,
    poster: Record<TMDB_Config['images']['poster_sizes'][number], null | string>,
  };
};

// Fetchers
const TMDB_API_KEY = "07b56bc5b1c1bc263f0a9427ea79244a";
export const fetchAipConfig = async (): Promise<TMDB_Config> => {
  const tmdb_config: TMDB_Config = await fetch(`http://api.themoviedb.org/3/configuration?api_key=${TMDB_API_KEY}`).then(res => res.json());
  return tmdb_config;
};
export const fetchMoviesByTerm = async (search_term: string): Promise<Movie[]> => {
  //console.log('Fetch Movies by Term ...', search_term);
  const movies_raw: TMDB_Movie[] = await fetch(`http://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${search_term}`)
    .then(res => res.json())
    .then(res => res.results);

  //console.log('Fetching TMDB Config ...');
  const tmdb_api_config = await fetchAipConfig();
  //console.log('config', tmdb_api_config);

  //console.log('Fetching Movies ...');
  const movies: Movie[] = movies_raw.map(m => ({
    id: m.id,
    title: m.title,
    original_title: m.original_title,
    overview: m.overview,
    images: {
      backdrop: {
        original: m.backdrop_path === null ? null : `${tmdb_api_config.images.base_url}original${m.backdrop_path}`,
        w300: m.backdrop_path === null ? null : `${tmdb_api_config.images.base_url}w300${m.backdrop_path}`,
        w780: m.backdrop_path === null ? null : `${tmdb_api_config.images.base_url}w780${m.backdrop_path}`,
        w1280: m.backdrop_path === null ? null : `${tmdb_api_config.images.base_url}w1280${m.backdrop_path}`,
      },
      poster: {
        original: m.poster_path === null ? null : `${tmdb_api_config.images.base_url}original${m.poster_path}`,
        w92: m.poster_path === null ? null : `${tmdb_api_config.images.base_url}w92${m.poster_path}`,
        w154: m.poster_path === null ? null : `${tmdb_api_config.images.base_url}w154${m.poster_path}`,
        w185: m.poster_path === null ? null : `${tmdb_api_config.images.base_url}w185${m.poster_path}`,
        w342: m.poster_path === null ? null : `${tmdb_api_config.images.base_url}w342${m.poster_path}`,
        w500: m.poster_path === null ? null : `${tmdb_api_config.images.base_url}w500${m.poster_path}`,
        w780: m.poster_path === null ? null : `${tmdb_api_config.images.base_url}w780${m.poster_path}`,
      }
    }
  }));
  return movies;
};