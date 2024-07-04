'use client'
// Styles
import styles from './MovieDetail.module.css'

//Components
import MainButton from '../MainButton/MainButton';

// Interfaces
import { IMovieDetail, Movie } from '@/app/interfaces/interfaces';
// Utils
import Image from 'next/image';
import { convertStringToList } from '@/app/utils/utils';
import { GrFormPreviousLink } from 'react-icons/gr';
import Rating from '../Rating/Rating';
import { useEffect } from 'react';

// Data with redux
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import { fetchMovies } from '@/redux/slices/moviesSlice';

const MovieDetail = ({ id }: IMovieDetail) => {
  const dispatch = useDispatch<AppDispatch>()
  const { movies } = useSelector((state: RootState) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch])
  const filteredMovie: Movie | undefined = movies.find((movie: Movie) => movie.imdbID === id)
  
  const genres = convertStringToList(filteredMovie!.Genre)

  return(
    <>
      <div className={styles.detailPageContainer}>
        {filteredMovie && 
          <div className={styles.detailPageContent}>
            <Image 
              src={filteredMovie.Poster} 
              alt={`${filteredMovie.Title}`} 
              width={300} 
              height={445} 
            />
            <div className={styles.infos}>
              <div className={styles.header}>
                <div>
                  <h1 className={styles.title}>{filteredMovie.Title}</h1>
                  <div className={styles.genresContainer}>
                    {genres.map((genre, i) => (
                      <span key={i} className={styles.genre}>
                        {genre}
                      </span>
                    ))}
                  </div>
                </div>
                <div className={styles.ratingContainer}>
                  <span className={styles.rating}>{filteredMovie.imdbRating}</span>
                </div>
              </div>
              <div className={styles.detail}>
                <p className={styles.plot}>{filteredMovie.Plot}</p>
                <div className={`${styles.box} ${styles.borderBottom}`}>
                  <span className={styles.infoLine}>Release Date: <p>{filteredMovie.Released}</p></span>
                  <span className={styles.infoLine}>Runtime: <p>{filteredMovie.Runtime}</p></span>
                  <span className={styles.infoLine}>Box Office: <p>{filteredMovie.BoxOffice}</p></span>
                </div>
                <span className={`${styles.infoLine} ${styles.borderBottom}`}>Actors: <p>{filteredMovie.Actors}</p></span>
                <span className={`${styles.infoLine} ${styles.borderBottom}`}>Director: <p>{filteredMovie.Director}</p></span>
                <span className={`${styles.infoLine} ${styles.borderBottom}`}>Your Rating: <Rating id={filteredMovie.imdbID} /></span>
              </div>
            </div>
          </div>
        }
      </div>
      <MainButton href={'/'} text={"Back"} icon={<GrFormPreviousLink />}/>
    </>
  )
}

export default MovieDetail;