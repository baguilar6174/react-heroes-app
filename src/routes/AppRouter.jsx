import { Route, Routes } from 'react-router-dom';

import { LoginPage } from '../modules/auth/pages';
import { HeroresRoutes } from '../modules/heroes/routes/Herores.routes';
import { PrivateRoute } from './Private.route';
import { PublicRoute } from './Public.route';

export const AppRouter = () => {
	return (
		<>
			<Routes>
				<Route
					path='login'
					element={
						<PublicRoute>
							<LoginPage />
						</PublicRoute>
					}
				/>
				<Route
					path='/*'
					element={
						<PrivateRoute>
							<HeroresRoutes />
						</PrivateRoute>
					}
				/>
			</Routes>
		</>
	);
};
