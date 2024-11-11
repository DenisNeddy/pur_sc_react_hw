import { configureStore } from '@reduxjs/toolkit';
import userFavoriteSlice from './favorite.slice';
import { saveState } from './storage';

export const store = configureStore({
	reducer: {
		favorite: userFavoriteSlice
	}
});

store.subscribe(() => {
	saveState({name: 'Петя', favoriteFilms: store.getState().favorite.favoriteFilms}, 'userData');
});

export type RootState = ReturnType<typeof  store.getState>;
export type AppDispatch = typeof store.dispatch;