import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeSong } from '../redux/slice/librarySlice.js';
import {
  LibraryWrapper,
  LibraryCard,
  SongInfo,
  SongTitle,
  SongDetails,
  RemoveButton,
} from './styles/LibraryStyles.js';

const Library = () => {
  const { songs } = useSelector((state) => state.library);
  const dispatch = useDispatch();

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
          <RemoveButton onClick={() => dispatch(removeSong(song.idAlbum))}>Eliminar</RemoveButton>
        </LibraryCard>
      ))}
    </LibraryWrapper>
  );
};

export default Library;