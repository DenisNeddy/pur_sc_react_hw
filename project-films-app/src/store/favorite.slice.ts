/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit';
import { loadState } from './storage';

const initialState = {
	favoriteFilms: loadState('userData')?.favoriteFilms || []
};

export const userFavoriteSlice = createSlice({
	name: 'favorite',
	initialState,
	reducers: {
		addFavoriteFilm: (state, action) => {		
			state.favoriteFilms.push(action.payload);
		
		},
		removeFavoriteFilm: (state, action) => {
			state.favoriteFilms = state.favoriteFilms.filter((el: { id: any; }) => el.id !== action.payload.id);
		}
	}
});

export default userFavoriteSlice.reducer;
export const favoriteActions = userFavoriteSlice.actions;