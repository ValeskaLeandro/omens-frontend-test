import Link from 'next/link';
import styles from './Footer.module.css'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return(
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
      <ul className={styles.links}>
        <li><Link href={""} className={styles.link}>Term of use</Link></li>
        <li><Link href={""} className={styles.link}>Privacy</Link></li>
        <li><Link href={""} className={styles.link}>About</Link></li>
        <li><Link href={""} className={styles.link}>FAQ</Link></li>
      </ul>
      <p className={styles.paragraph}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, quaerat fuga? Qui laudantium facilis quibusdam saepe accusamus velit ipsa facere labore assumenda, pariatur eveniet sequi neque ad quia asperiores consectetur. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti provident dolorem explicabo exercitationem magni. Inventore natus amet nihil facilis, provident cupiditate sequi nemo libero tempore vero dolore, recusandae veniam quasi!</p>

      <ul className={styles.socialMedia}>
        <li><Link href={""} className={styles.link}><FaGithub /></Link></li>
        <li><Link href={""} className={styles.link}><FaLinkedin /></Link></li>
        <li><Link href={""} className={styles.link}><FaInstagram /></Link></li>
      </ul>
      </div>
    </footer>
  )
}

export default Footer;