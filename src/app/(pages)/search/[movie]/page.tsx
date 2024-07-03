// Styles
import styles from '@/app/page.module.css'

// Components
import MainButton from "@/app/components/MainButton/MainButton"
import MovieDetail from "@/app/components/MovieDetail/MovieDetail"

//Utils
import { findMovieByName } from "@/app/utils/utils"
import { GrFormPreviousLink } from "react-icons/gr"

// Data
import { getMovies } from "@/app/api/api"

const MovieSearch = async ({ params }: { params: { movie: string }}) => {
  const searchTherm = params.movie
  const movies = await getMovies()
  const movieName = searchTherm.split('-').join(' ')
  const filteredMovie = findMovieByName({ movies, movieName })

  return(
    <main className={styles.main}>
    {
      filteredMovie ? (
      <MovieDetail id={filteredMovie.imdbID} />
      ) : (
        <>
          <span>Movie {movieName} not found</span>
          <MainButton href={'/'} text={"Back"} icon={<GrFormPreviousLink />}/>
        </>
      )
    }
    </main>
  )
}

export default MovieSearch;