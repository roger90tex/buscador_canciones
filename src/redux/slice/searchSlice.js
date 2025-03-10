import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSongs = createAsyncThunk('search/fetchSongs', async (query, { rejectWithValue }) => {
  try {
    const response = await axios.get(`https://itunes.apple.com/search?term=${query}&entity=album`);
    console.log('Respuesta de iTunes:', response.data);
   // Validar si hay artistas en la respuesta
   if (!response.data.results || response.data.results.length === 0) {
    return rejectWithValue(`No se encontraron álbumes para "${query}"`);
  }

  return response.data.results.map(album => ({
      idAlbum: album.collectionId,
      title: album.collectionName,
      strArtist: album.artistName,
      strAlbum: album.collectionName,
      artwork: album.artworkUrl100, // Imagen del álbum
    }));
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    results: [],
    loading: false,
    error: null,
  },
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
      .addCase(fetchSongs.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload;
      })
      .addCase(fetchSongs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { resetResults } = searchSlice.actions;
export default searchSlice.reducer;