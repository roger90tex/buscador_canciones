import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

// Interfaz para un álbum devuelto por la API
interface Album {
  idAlbum: number;
  title: string;
  strArtist: string;
  strAlbum: string;
  artwork: string;
}

// Interfaz para el estado del slice
interface SearchState {
  results: Album[];
  loading: boolean;
  error: string | null;
}

// Estado inicial tipado
const initialState: SearchState = {
  results: [],
  loading: false,
  error: null,
};

// Thunk para buscar canciones (álbumes)
export const fetchSongs = createAsyncThunk<Album[], string, { rejectValue: string }>(
  'search/fetchSongs',
  async (query: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://itunes.apple.com/search?term=${query}&entity=album`);
      console.log('Respuesta de iTunes:', response.data);

      // Validar si hay resultados
      if (!response.data.results || response.data.results.length === 0) {
        return rejectWithValue(`No se encontraron álbumes para "${query}"`);
      }

      return response.data.results.map((album: any) => ({
        idAlbum: album.collectionId,
        title: album.collectionName,
        strArtist: album.artistName,
        strAlbum: album.collectionName,
        artwork: album.artworkUrl100,
      }));
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : 'Error desconocido');
    }
  }
);

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    resetResults: (state) => {
      state.results = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSongs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSongs.fulfilled, (state, action: PayloadAction<Album[]>) => {
        state.loading = false;
        state.results = action.payload;
      })
      .addCase(fetchSongs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Error desconocido';
      });
  },
});

export const { resetResults } = searchSlice.actions;
export default searchSlice.reducer;