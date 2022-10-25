import { AuthContext } from './Auth.context';
import PropTypes from 'prop-types';
import { useReducer } from 'react';
import { authReducer } from './auth.reducer';
import { types } from '../types/types';

/* const initialState = {
	logged: false,
}; */

const init = () => {
	const user = JSON.parse(localStorage.getItem('user'));
	return {
		logged: !!user,
		user,
	};
};

export const AuthProvider = ({ children }) => {
	const [state, dispatch] = useReducer(authReducer, {}, init);

	const onLogin = (name = '') => {
		const user = {
			id: '123',
			name,
		};
		const action = {
			type: types.login,
			payload: user,
		};
		localStorage.setItem('user', JSON.stringify(user));
		dispatch(action);
	};

	const onLogout = () => {
		localStorage.removeItem('user');
		const action = {
			type: types.logout,
		};
		dispatch(action);
	};

	return (
		<AuthContext.Provider value={{ ...state, onLogin, onLogout }}>
			{children}
		</AuthContext.Provider>
	);
};

AuthProvider.propTypes = {
	children: PropTypes.any,
};
