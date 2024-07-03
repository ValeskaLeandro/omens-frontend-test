'use client'
// Interfaces
import { IRating } from "@/app/interfaces/interfaces";

// Utils
import { useEffect, useState } from "react";
import StarComponent from "../StarComponent/StarComponent";

const stars: number[] = [1, 2, 3, 4, 5];

const Rating = ({ id }: IRating) => {
  const [activeStar, setActiveStar] = useState<number>();
  const nameItem = `movie-rating-${id}`

  useEffect(() => {
    const savedRating = localStorage.getItem(nameItem)
    if(savedRating) {
      setActiveStar(parseInt(savedRating))
    }
  }, [nameItem])

  const onClickStar = (index: number) => {
    const newRating = activeStar === index ? undefined : index;
    setActiveStar(newRating)

    if(newRating !== undefined) {
      localStorage.setItem(nameItem, newRating.toString())
    } else {
      localStorage.removeItem(nameItem)
    }
  }
  return(
    <div>
      {stars.map((index) => (
        <StarComponent 
        key={`star-${index}`}
        onClick={() => onClickStar(index)}
        isActive={index <= (activeStar ?? -1)}
        />
        ))
      }
    </div>
  )
}

export default Rating;