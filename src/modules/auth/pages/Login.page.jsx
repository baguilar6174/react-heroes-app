import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/Auth.context';

export const LoginPage = () => {
	const navigate = useNavigate();
	const { onLogin } = useContext(AuthContext);

	const handleLogin = () => {
		onLogin('Bryan Alexander');
		navigate('/', {
			replace: true,
		});
	};

	return (
		<div className='container mt-5'>
			<h1>Login</h1>
			<hr />
			<button className='btn btn-primary' onClick={handleLogin}>
				Login
			</button>
		</div>
	);
};
