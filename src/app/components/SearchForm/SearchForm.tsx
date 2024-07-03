'use client'
// Styles
import styles from './SearchForm.module.css'

// Icons
import { IoSearch } from 'react-icons/io5';

// Utils
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const SearchForm = () => {
  const router = useRouter()
  const [search, setSearch] = useState<string>('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(search) {
      const searchFormatted = search.trim().toLowerCase().replace(/ /g, '-')
      router.push(`/search/${searchFormatted}`)
      setSearch('')
    }
  }

  return(
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <IoSearch className={styles.icon} size={25}/>
      <input type="text" 
      placeholder="Search for movie..." 
      onChange={(e) => setSearch(e.target.value)}
      className={styles.inputText}/>
      
      <button type="submit" 
      className={`${styles.buttonSubmit} ${styles.buttonMobile}`}>
        Search
      </button>
    </form>
  )
}

export default SearchForm;