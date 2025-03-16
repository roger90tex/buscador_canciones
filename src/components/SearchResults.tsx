import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addSong } from '../redux/slices/librarySlice'; // Sin .js
import {
  ResultsWrapper,
  ResultCard,
  SongInfo,
  SongTitle,
  SongDetails,
  AddButton,
  ErrorWrapper,
  RetryButton,
} from './styles/SearchResultsStyles'; // Sin .js
import { RootState, AppDispatch } from '../redux/store'; // Tipos desde store.ts

const SearchResults: React.FC = () => {
  const { results, error } = useSelector((state: RootState) => state.search);
  const dispatch = useDispatch<AppDispatch>();

  if (error) {
    return (
      <ErrorWrapper>
        Error: {error.toString()}{' '}
        <RetryButton onClick={() => window.location.reload()}>Reintentar</RetryButton>
      </ErrorWrapper>
    );
  }

  if (!results || results.length === 0) {
    return <p>No se encontraron resultados</p>;
  }

  return (
    <ResultsWrapper>
      {results.map((song) => (
        <ResultCard key={song.idAlbum}>
          <SongInfo>
            <img src={song.artwork} alt={song.strAlbum} width="100" />
            <SongTitle>{song.title}</SongTitle>
            <SongDetails>{song.strAlbum} - {song.strArtist}</SongDetails>
          </SongInfo>
          <AddButton onClick={() => dispatch(addSong(song))}>Agregar</AddButton>
        </ResultCard>
      ))}
    </ResultsWrapper>
  );
};

export default SearchResults;