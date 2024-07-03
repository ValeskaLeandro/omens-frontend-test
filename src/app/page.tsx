// Styles
import styles from "./page.module.css";

// Components
import MainHero from "./components/MainHero/MainHero";
import Pagination from "./components/Pagination/Pagination";

// Data
import { getMovies } from "./api/api";

export default async function Home() {
  const movies = await getMovies()
  return (
    <main className={styles.main}>
      <MainHero />
      <Pagination movies={movies} />
    </main>
  );
}
