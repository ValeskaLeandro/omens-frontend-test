// Styles
import styles from './MainButton.module.css'

//Utils
import Link from 'next/link'

//Interfaces
import { IMainButton } from '@/app/interfaces/interfaces'

const MainButton = ({href, text, icon} : IMainButton) => {
  return(
    <Link href={href} className={styles.mainButton}>{icon} {text}</Link>
  )
}

export default MainButton