import {createSlice} from '@reduxjs/toolkit';
import {loadState} from './storage';
import {Profile} from '../interfaces/user.interface';

export interface UserState {
    profile: Profile
}

const profileInitial: Profile = {
	name: loadState('userData')?.name || '',
	favorites:  loadState('userData')?.favoriteFilms || []
};

const initialState: UserState = {
	profile: profileInitial
};

export const userProfileSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		addUserName: (state, action) => {
			state.profile.name = action.payload;
		},
		addFavoriteFilm: (state, action) => {
			state.profile.favorites.push(action.payload);
		},
		removeFavoriteFilm: (state, action) => {
			state.profile.favorites = state.profile.favorites.filter((el) => el.id !== action.payload.id);
		},
		resetFilmList: (state) => {
			state.profile.favorites = [];
		}
	}
});

export default userProfileSlice.reducer;
export const userActions = userProfileSlice.actions;