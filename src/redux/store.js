import { configureStore } from '@reduxjs/toolkit';
import libraryReducer from './slice/librarySlice.js';
import searchReducer from './slice/searchSlice.js';

const store = configureStore({
  reducer: {
    library: libraryReducer,
    search: searchReducer,
  },
});

export default store;