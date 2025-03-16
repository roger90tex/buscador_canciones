import { configureStore } from '@reduxjs/toolkit';
import libraryReducer from './slices/librarySlice';
import searchReducer from './slices/searchSlice';
import songsReducer from './slices/songsSlice'; // Nuevo slice para canciones

const store = configureStore({
  reducer: {
    library: libraryReducer,
    search: searchReducer,
    songs: songsReducer,
  },
});

// Tipos para el estado global y el dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;