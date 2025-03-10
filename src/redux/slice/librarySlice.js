import { createSlice } from '@reduxjs/toolkit';

const librarySlice = createSlice({
  name: 'library',
  initialState: {
    songs: [], // Array para almacenar canciones
  },
  reducers: {
    addSong: (state, action) => {
      const song = action.payload;
      if (!state.songs.some((s) => s.idAlbum === song.idAlbum)) {
        state.songs.push(song);
      }
    },
    removeSong: (state, action) => {
      state.songs = state.songs.filter((song) => song.idAlbum !== action.payload);
    },
  },
});

export const { addSong, removeSong } = librarySlice.actions;
export default librarySlice.reducer;