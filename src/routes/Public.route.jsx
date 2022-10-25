import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../modules/auth/context/Auth.context';

export const PublicRoute = ({ children }) => {
	const { logged } = useContext(AuthContext);

	return logged ? <Navigate to={`/marvel`} /> : children;
};

PublicRoute.propTypes = {
	children: PropTypes.any,
};
