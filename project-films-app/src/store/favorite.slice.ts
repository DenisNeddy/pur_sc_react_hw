/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit';
// import { CardProps } from '../components/Card/Card.props';
import { loadState } from './storage';

// export interface FavoriteState {
//     id: string,
//     // img: string,
//     // title: string,
//     // rating: number,
// }

const initialState = {

	favoriteFilms: loadState('userData')?.favoriteFilms || []
};

export const userFavoriteSlice = createSlice({
	name: 'favorite',
	initialState,
	reducers: {
		addFavoriteFilm: (state, action) => {
			console.log(action.payload, 'payload');
			state.favoriteFilms.push(action.payload);
		
		},
		removeFavoriteFilm: (state, action) => {
			state.favoriteFilms = state.favoriteFilms.filter((el: { id: any; }) => el.id !== action.payload.id);
		}
	}

});


export default userFavoriteSlice.reducer;
export const favoriteActions = userFavoriteSlice.actions;