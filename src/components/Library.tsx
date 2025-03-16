import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeSong } from '../redux/slices/librarySlice'; 
import {
  LibraryWrapper,
  LibraryCard,
  SongInfo,
  SongTitle,
  SongDetails,
  RemoveButton,
} from './styles/LibraryStyles'; 
import { RootState, AppDispatch } from '../redux/store';

const Library: React.FC = () => {
  const { songs } = useSelector((state: RootState) => state.library);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <LibraryWrapper>
      {songs.map((song) => (
        <LibraryCard key={song.idAlbum}>
          <SongInfo>
            <SongTitle>{song.title}</SongTitle>
            <SongDetails>
              {song.strAlbum} - {song.strArtist}
            </SongDetails>
          </SongInfo>
          <RemoveButton onClick={() => dispatch(removeSong(song.idAlbum))}>
            Eliminar
          </RemoveButton>
        </LibraryCard>
      ))}
    </LibraryWrapper>
  );
};

export default Library;