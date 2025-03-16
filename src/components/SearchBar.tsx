import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSongs } from '../redux/slices/searchSlice'; 
import { addSong } from '../redux/slices/songsSlice'; 
import {
  SearchWrapper,
  SearchInput,
  SearchButton,
  LoadingText, // Incluido aunque no se usa aún
} from './styles/SearchBarStyles'; // Sin .js
import { RootState, AppDispatch } from '../redux/store'; 

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState<string>(''); // Tipamos query como string
  const dispatch = useDispatch<AppDispatch>(); // Tipamos dispatch
  const { loading } = useSelector((state: RootState) => state.search); // Tipamos el estado

  const handleSearch = () => {
    if (query) dispatch(fetchSongs(query));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <SearchWrapper>
      <SearchInput
        value={query}
        onChange={handleChange} // Usamos función tipada
        placeholder="Busca un artista..."
      />
      <SearchButton onClick={handleSearch} disabled={loading}>
        {loading ? 'Cargando...' : 'Buscar'}
      </SearchButton>
    </SearchWrapper>
  );
};

export default SearchBar;