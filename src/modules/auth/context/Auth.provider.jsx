import { AuthContext } from './Auth.context';
import PropTypes from 'prop-types';
import { useReducer } from 'react';
import { authReducer } from './auth.reducer';

const initialState = {
	logged: false,
};

export const AuthProvider = ({ children }) => {
	const [state, dispatch] = useReducer(authReducer, initialState);

	return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
	children: PropTypes.any,
};
