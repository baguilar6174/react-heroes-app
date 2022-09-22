import { Route, Routes } from 'react-router-dom';

import { LoginPage } from '../modules/auth/pages';
import { HeroresRoutes } from '../modules/heroes/routes/Herores.routes';

export const AppRouter = () => {
	return (
		<>
			<Routes>
				<Route path='login' element={<LoginPage />} />
				<Route path='/*' element={<HeroresRoutes />} />
			</Routes>
		</>
	);
};
