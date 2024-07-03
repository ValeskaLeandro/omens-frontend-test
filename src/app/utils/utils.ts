//Interfaces
import { IPaginate } from "../interfaces/interfaces";

export const paginate = ({movies, pageSize, currentPage}: IPaginate) => {
  return movies.slice((currentPage - 1) * pageSize, currentPage * pageSize)
}

export const convertStringToList = (text: string) => {
  return text.split(',')
}