import { AuthProvider } from './modules/auth/context';
import { AppRouter } from './routes/AppRouter';

export const HeroesApp = () => {
	return (
		<AuthProvider>
			<AppRouter />
		</AuthProvider>
	);
};
