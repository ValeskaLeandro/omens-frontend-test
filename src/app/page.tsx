// Styles
import styles from "./page.module.css";

// Components
import MainHero from "./components/MainHero/MainHero";
import Pagination from "./components/Pagination/Pagination";

// Data
import { getData } from "./api/api";

export default async function Home() {
  const movies = await getData()
  return (
    <main className={styles.main}>
      <MainHero />
      <Pagination movies={movies} />
    </main>
  );
}
