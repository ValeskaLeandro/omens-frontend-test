'use client'
//styles
import { useEffect, useState } from 'react'
import styles from './Favorite.module.css'

// Interfaces
import { IId } from '@/app/interfaces/interfaces'
import { RiHeartAddLine, RiHeartFill } from 'react-icons/ri'
import { getFavorites } from '@/app/utils/utils'

const Favorite = ({ id }: IId) => {
  const [isFav, setIsFav] = useState<boolean>(false)
  const favorites = getFavorites()
  
  const isFavorite = (id: string): boolean => {
    const favorites = getFavorites()
    return favorites.includes(id)
  }

  useEffect(() => {
    setIsFav(isFavorite(id))
  }, [id])

  const saveFavorite = (id: string) => {
    const indexFavorite = favorites.indexOf(id)

    if(indexFavorite === -1) {
      favorites.push(id);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    } else {
      favorites.slice(indexFavorite, 1);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }
  const toggleFavorite = () => {
    saveFavorite(id);
    setIsFav(!isFav)
  };
  return(
    <button onClick={() => toggleFavorite()} className={styles.buttonFav}>
      {isFav ? 
      (
        <RiHeartFill fill="#f00" size={25}/> 

      ) : (
        <RiHeartAddLine  size={25}/>
        )} 
    </button>
  )
}

export default Favorite;