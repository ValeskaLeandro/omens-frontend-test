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
import MovieCard from '../MovieCard/MovieCard';

const pageSize = 4;

const Pagination = ( {movies} : IMovies) => {
  const [currentPage, setCurrentPage] = useState<number>(1)
  const paginatedItems = paginate({ movies, pageSize, currentPage })
  const totalPages = Math.ceil(movies.length / pageSize)

  const nextPage = () => setCurrentPage(prev => prev + 1) 
  const prevPage = () => setCurrentPage(prev => prev - 1) 
  return(
    <div>
      {paginatedItems.map((movie: Movie) => (
        <MovieCard movie={movie} key={movie.imdbID}/>  
      ))}
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