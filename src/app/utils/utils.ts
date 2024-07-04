//Interfaces
import { IFindMovieByName, IPaginate } from "../interfaces/interfaces";

export const paginate = ({movies, pageSize, currentPage}: IPaginate) => {
  return movies.slice((currentPage - 1) * pageSize, currentPage * pageSize)
}

export const convertStringToList = (text: string) => {
  return text.split(',')
}

export const findMovieByName = ({movies, movieName}: IFindMovieByName) => {
  return movies.find(movie => movie.Title.toLowerCase().includes(movieName.toLowerCase()))
}

export const getFavorites = () => {
  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]")

  if (favorites.length === 0) {
    localStorage.removeItem("favorites")
  }

  return favorites;
}