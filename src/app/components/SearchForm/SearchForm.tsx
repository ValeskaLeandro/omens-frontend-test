'use client'
// Styles
import styles from './SearchForm.module.css'

// Icons
import { IoSearch } from 'react-icons/io5';

// Utils
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

// Autosuggest
import Autosuggest from 'react-autosuggest';

// Interfaces
import { Movie } from '@/app/interfaces/interfaces';

// Data with redux
import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "@/redux/slices/moviesSlice";

const SearchForm = () => {
  const router = useRouter()
  const [search, setSearch] = useState<string>('')
  const [suggestions, setSuggestions] = useState<Movie[]>([]);
  const dispatch = useDispatch<AppDispatch>();
  const { movies } = useSelector((state: RootState) => state.movies);
  
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);
  
  // Autosuggest variables
  const getSuggestion =(value: string) =>{
    const inputValue = value.trim().toLowerCase()
    const inputLength = inputValue.length
  
    return inputLength === 0? [] : movies.filter(
      (movie: Movie) => movie.Title.toLowerCase().slice(0, inputLength) === inputValue
    )
  }
  const getSuggestionValue = (suggestion: Movie) => suggestion.Title;
  const renderSuggestion = (suggestion: Movie) => (
    <div className={styles.suggestion}>{suggestion.Title}</div>
  );
  const onChange = (event: React.FormEvent,{ newValue }: Autosuggest.ChangeEvent) => setSearch(newValue)
  const onSuggestionsFetchRequested = ({ value }: Autosuggest.SuggestionsFetchRequestedParams) => {
    setSuggestions(getSuggestion(value))
  }
  const onSuggestionsClearRequested = () => setSuggestions([]);

  const inputProps = {
    placeholder: 'Search for movie...',
    value: search,
    onChange: onChange,
    className: styles.inputText
  };
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
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        theme={{
          suggestionsContainerOpen: styles.suggestionsContainer,
          suggestion: styles.suggestion,
          suggestionHighlighted: styles.suggestionHighlighted,
        }}
      />
      
      <button type="submit" 
      className={`${styles.buttonSubmit} ${styles.buttonMobile}`}>
        Search
      </button>
    </form>
  )
}

export default SearchForm;