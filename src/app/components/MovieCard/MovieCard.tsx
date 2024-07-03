// Styles
import styles from './MovieCard.module.css'

// Utils
import Image from 'next/image';
import Link from 'next/link';

// Interfaces
import { IMovieCard } from '@/app/interfaces/interfaces';
const MovieCard = ({movie}: IMovieCard) => {
  return(
    <div className={styles.containerCard}>
      <Link href={`/movie/${movie.imdbID}`}>
        <div className={styles.containerImage}>
          <Image 
          src={movie.Poster} 
          alt={`${movie.Title}`} 
          width={300} 
          height={445} 
          className={styles.imageCard}
          />
          <span className={styles.rating}>{movie.imdbRating}</span>
        </div>
        <div className={styles.infos}>
          <p>{movie.Title}</p>
          <span>{movie.Released}</span>
        </div>
      </Link>
        <div className={styles.ration}></div>
    </div>
    
  )
}

export default MovieCard;