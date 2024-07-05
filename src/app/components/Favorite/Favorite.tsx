'use client'
//styles
import { useEffect, useState } from 'react'
import styles from './Favorite.module.css'

// Interfaces
import { IId } from '@/app/interfaces/interfaces'

//Utils
import { RiHeartAddLine, RiHeartFill } from 'react-icons/ri'
import { getFavorites } from '@/app/utils/utils'

const Favorite = ({ id }: IId) => {
  const [isFav, setIsFav] = useState<boolean>(false)

  const isFavorite = (id: string): boolean => {
    const favorites = getFavorites();
    return favorites.includes(id)
  }

  useEffect(() => {
    setIsFav(isFavorite(id))
  }, [id])

  const saveFavorite = (id: string) => {
    const favorites = getFavorites()
    const indexFavorite = favorites.indexOf(id)
  
    if(indexFavorite === -1) {
      favorites.push(id);
    } else {
      favorites.splice(indexFavorite, 1);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
  
    const event = new Event("favoritesUpdated")
    window.dispatchEvent(event)
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