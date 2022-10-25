import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../modules/auth/context/Auth.context';

export const PrivateRoute = ({ children }) => {
	const { logged } = useContext(AuthContext);
	return logged ? children : <Navigate to={`/login`} />;
};

PrivateRoute.propTypes = {
	children: PropTypes.any,
};
