import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSongs } from '../redux/slice/searchSlice.js';
import {SearchWrapper, SearchInput, SearchButton, LoadingText} from '../components/styles/SearchBarStyles.js';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.search);

  const handleSearch = () => {
    if (query) dispatch(fetchSongs(query));
  };

  return (
    <SearchWrapper>
      <SearchInput value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Busca un artista..." />
      <SearchButton onClick={handleSearch} disabled={loading}>
        {loading ? 'Cargando...' : 'Buscar'}
      </SearchButton>
    </SearchWrapper>
  );
};

export default SearchBar;