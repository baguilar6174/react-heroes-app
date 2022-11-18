import { authReducer } from '../../../../src/modules/auth/context/auth.reducer';
import { types } from '../../../../src/modules/auth/types/types';

describe('Tests on auth reducer', () => {
	test(`Should return a default state`, () => {
		const state = authReducer({ logged: false }, {});
		expect(state).toEqual({ logged: false });
	});

	test(`Should login call login and autenticate the user`, () => {
		const action = {
			type: types.login,
			payload: {
				name: 'Bryan',
				id: '111',
			},
		};
		const state = authReducer({ logged: false }, action);
		expect(state).toEqual({
			...state,
			logged: true,
			user: action.payload,
		});
	});

	test(`Should logout delete user name and logged in false`, () => {
		const state = {
			logged: true,
			user: {
				name: 'Bryan',
				id: '111',
			},
		};
		const action = {
			type: types.logout,
		};
		const newState = authReducer(state, action);
		expect(newState).toEqual({
			logged: false,
		});
	});
});
