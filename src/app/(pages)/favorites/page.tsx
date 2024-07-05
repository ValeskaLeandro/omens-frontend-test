'use client'
//Styles
import styles from './FavoritesPage.module.css'
import stylesGlobal from '@/app/page.module.css'

// Utils
import { useEffect, useState } from 'react';
import { GrFormPreviousLink } from 'react-icons/gr';
import { getFavorites } from '@/app/utils/utils';

// Components
import MainButton from '@/app/components/MainButton/MainButton';
import MovieCard from '@/app/components/MovieCard/MovieCard';

// Data with redux
import { fetchMovies } from '@/redux/slices/moviesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';

const FavoritesPage = () => {
  const [favoritesId, setFavoritesId] = useState<string[]>([])
  const dispatch = useDispatch<AppDispatch>();
  const { movies } = useSelector((state: RootState) => state.movies);
  const favoriteMovies = movies.filter(movie => favoritesId?.includes(movie.imdbID))

  const updateFavorites = () => {
    const favorites = getFavorites()
    if(favorites) {
      setFavoritesId(favorites)
    }
  }
  useEffect(() => {
    dispatch(fetchMovies())
  }, [dispatch])

  useEffect(() => {
    // verifica client
    if(typeof window !== undefined){
      updateFavorites()
      window.addEventListener("favoritesUpdated", updateFavorites)
    }

    return () => {
      window.removeEventListener("favoritesUpdated", updateFavorites)
    }
  }, [])

  return (
    <main className={stylesGlobal.main}>
      {favoriteMovies.length > 0 ?(
        <div className={styles.container}>
          <h1>Your favorite movies</h1>
          <div className={styles.moviesGrid}>
            {favoriteMovies.map(movie => (
              <div key={movie.imdbID}>
                <MovieCard movie={movie} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className={styles.containerNotMovies}>
          <span className={styles.noMovies}>You don&apos;t have a favorite movie :(</span>
        </div>
      )}
      <MainButton href={'/'} text={"Back"} icon={<GrFormPreviousLink />}/>
    </main>
  )
}

export default FavoritesPage