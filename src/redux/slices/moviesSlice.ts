// Utils
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Interfaces
import { MoviesState, Movie } from "@/app/interfaces/interfaces";
import { AppThunk } from "../store";
import { getMovies } from "@/app/api/api";

// Data


const initialState: MoviesState = {
  movies: []
}
const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (state, action: PayloadAction<Movie[]>) => {
      state.movies = action.payload;
    }
  },
})

export const { setMovies } = moviesSlice.actions;

export const fetchMovies = (): AppThunk => async (dispatch) => {
  try {
    const moviesData = await getMovies()
    dispatch(setMovies(moviesData))
  } catch (error) {
    console.error("Error fetching movies.")
  }
}

export default moviesSlice.reducer;