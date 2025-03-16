import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Interfaz para una canción, alineada con otros slices
interface Song {
  idAlbum: number; // Cambié 'id' a 'idAlbum' para consistencia con searchSlice y librarySlice
  title: string;
  artist: string; // Podrías usar 'strArtist' si prefieres consistencia con searchSlice
  status: 'pending' | 'playing' | 'completed';
  artwork?: string; // Opcional, para coincidir con searchSlice si se integra
}

// Estado inicial
interface SongsState {
  songs: Song[];
}

const initialState: SongsState = {
  songs: [],
};

const songsSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    addSong: (state, action: PayloadAction<Song>) => {
      state.songs.push(action.payload);
    },
    updateSongStatus: (
      state,
      action: PayloadAction<{ idAlbum: number; status: Song['status'] }>
    ) => {
      const { idAlbum, status } = action.payload;
      const song = state.songs.find((s) => s.idAlbum === idAlbum);
      if (song) {
        song.status = status;
      }
    },
  },
});

export const { addSong, updateSongStatus } = songsSlice.actions;
export default songsSlice.reducer;