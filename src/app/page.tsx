'use client'
// Styles
import styles from "./page.module.css";

// Components
import MainHero from "./components/MainHero/MainHero";
import Pagination from "./components/Pagination/Pagination";

// Utils
import { useEffect } from "react";

// Data with redux
import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "@/redux/slices/moviesSlice";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>()
  const { movies } = useSelector((state: RootState) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch])

  return (
    <main className={styles.main}>
      <MainHero />
      <Pagination movies={movies} />
    </main>
  );
}
