import { configureStore } from '@reduxjs/toolkit';
import { saveState } from './storage';
import userProfileSlice  from './user.slice';

export const store = configureStore({
	reducer: {
		user: userProfileSlice
	}
});

store.subscribe(() => {
	saveState({name:  store.getState().user.profile.name, favoriteFilms: store.getState().user.profile.favorites}, 'userData');
});

export type RootState = ReturnType<typeof  store.getState>;
export type AppDispatch = typeof store.dispatch;