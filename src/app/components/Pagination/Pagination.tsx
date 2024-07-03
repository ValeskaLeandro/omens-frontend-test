'use client'
import { useState } from 'react';
//Styles 
import styles from './Pagination.module.css'

// Icons
import { GrNext, GrPrevious } from 'react-icons/gr';

// Interfaces
import { IMovies, Movie } from '@/app/interfaces/interfaces';

//Utils
import { paginate } from '@/app/utils/utils';
import Link from 'next/link';
import Image from 'next/image';

const pageSize = 4;

const Pagination = ( {movies} : IMovies) => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const paginatedItems = paginate({ movies, pageSize, currentPage })
  const totalPages = Math.ceil(movies.length / pageSize)

  const nextPage = () => setCurrentPage(prev => prev + 1) 
  const prevPage = () => setCurrentPage(prev => prev - 1) 
  return(
    <div>
      <ul>
        {paginatedItems.map((movie: Movie) => (
          <li key={movie.imdbID}>
            <Link href={`/movie/${movie.imdbID}`}>
              <Image src={movie.Poster} alt={`${movie.Title}`} width={300} height={445} />
              <p>{movie.Title} ({movie.Year})</p>
            </Link>
          </li>
        ))}
      </ul>
      <div className={styles.paginationButtons}>
        <button onClick={prevPage} disabled={currentPage === 1}>
          <GrPrevious />
        </button>
        <button onClick={nextPage} disabled={currentPage === totalPages}>
          <GrNext />
        </button>
      </div>
    </div>
  )
}

export default Pagination;