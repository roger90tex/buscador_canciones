import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Definimos la interfaz para una canción
interface Song {
  idAlbum: string | number;
  title: string;
  strArtist: string; // Cambiado de 'artist' a 'strArtist'
  strAlbum: string; // Añadido para consistencia
  artwork: string;   // Añadido para compatibilidad con Album
  [key: string]: any; // Opcional, para flexibilidad
}

// Estado inicial con tipado
interface LibraryState {
  songs: Song[];
}

const initialState: LibraryState = {
  songs: [],
};

const librarySlice = createSlice({
  name: 'library',
  initialState,
  reducers: {
    addSong: (state, action: PayloadAction<Song>) => {
      const song = action.payload;
      if (!state.songs.some((s) => s.idAlbum === song.idAlbum)) {
        state.songs.push(song);
      }
    },
    removeSong: (state, action: PayloadAction<string | number>) => {
      state.songs = state.songs.filter((song) => song.idAlbum !== action.payload);
    },
  },
});

export const { addSong, removeSong } = librarySlice.actions;
export default librarySlice.reducer;