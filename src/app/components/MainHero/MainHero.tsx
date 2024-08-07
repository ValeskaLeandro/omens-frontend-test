// Styles
import styles from './MainHero.module.css'

// Components
import SearchForm from '../SearchForm/SearchForm';

const MainHero = () => {
  return(
    <div className={styles.mainHero}>
      <div className={styles.containerTexts}>
        <h1 className={styles.welcome}>Welcome.</h1>
        <h2 className={styles.description}>Millions of movies for you. Explore now.</h2>
      </div>
      <SearchForm />
    </div>
  )
}

export default MainHero;