// Components
import MovieDetail from "@/app/components/MovieDetail/MovieDetail"

// Styles
import styles from '@/app/page.module.css'

const MovieDetailPage = ({params}: {params: {id: string}}) => {
  return(
    <main className={styles.main}>
      <MovieDetail id={params.id}/>
    </main>
  )
}

export default MovieDetailPage;