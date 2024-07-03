import Link from 'next/link';
import styles from './Header.module.css'
import { RiMovie2Fill } from 'react-icons/ri';
import { IoSearch } from 'react-icons/io5';

const Header = () => {
  return(
    <header className={styles.header}>
      <div className={styles.contentHeader}>
        <Link href={'/'} className={styles.logo}>
          <RiMovie2Fill size={30} />
          <span>Movies</span>
        </Link>
      </div>
    </header>
  )
}

export default Header;