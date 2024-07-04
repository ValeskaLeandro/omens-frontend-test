'use client'
// Styles
import styles from '@/app/page.module.css'

// Components
import MainButton from "@/app/components/MainButton/MainButton"
import MovieDetail from "@/app/components/MovieDetail/MovieDetail"

//Utils
import { useEffect } from 'react'
import { findMovieByName } from "@/app/utils/utils"
import { GrFormPreviousLink } from "react-icons/gr"

// Data with redux
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/redux/store'
import { fetchMovies } from '@/redux/slices/moviesSlice'


const MovieSearch = ({ params }: { params: { movie: string }}) => {
  const searchTherm = params.movie
  const movieName = searchTherm.split('-').join(' ')

  const dispatch = useDispatch<AppDispatch>()
  const { movies } = useSelector((state: RootState) => state.movies)

  useEffect(() => {
    dispatch(fetchMovies())
  }, [dispatch])
  
  const filteredMovie = findMovieByName({ movies, movieName })

  return(
    <main className={styles.main}>
    {
      filteredMovie ? (
        <MovieDetail id={filteredMovie.imdbID} />
      ) : (
        <div className={styles.movieNotFound}>          
            <span>Movie with &quot;{movieName}&quot; not found</span>          
            <div>
              <MainButton href={'/'} text={"Back"} icon={<GrFormPreviousLink />}/>
            </div>
        </div>
      )
    }
    </main>
  )
}

export default MovieSearch;