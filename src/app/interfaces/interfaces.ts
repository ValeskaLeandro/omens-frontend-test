export interface Movie {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

export interface IPaginate {
  movies: Movie[],
  pageSize: number,
  currentPage: number
}

export interface IMovies {
  movies: Movie[],
}

export interface IMovieCard {
  movie: Movie
}

export interface IMovieDetail {
  id: string
}

export interface IMainButton {
  href: string,
  text: string,
  icon?: React.ReactElement
}

export interface IFindMovieByName {
  movies: Movie[],
  movieName: string
}

export interface IStarComponent {
  isActive: boolean,
  onClick(): void
}

export interface IRating {
  id: string
}