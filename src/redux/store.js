import { configureStore } from '@reduxjs/toolkit';
import favoriteCarsReducer from './favoriteCarsSlice';

export const store = configureStore({
  reducer: {
    favoriteCars: favoriteCarsReducer,
  },
});