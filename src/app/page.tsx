// Styles
import styles from "./page.module.css";

// Components
import MainHero from "./components/MainHero/MainHero";

export default function Home() {
  return (
    <main className={styles.main}>
      <MainHero />
    </main>
  );
}
