import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../../src/modules/auth/context/Auth.context';
import { PublicRoute } from '../../src/routes/Public.route';

describe('Tests on <PublicRoute/> component', () => {
	test('Should render children if the user is not authenticated', () => {
		const contextValue = {
			logged: false,
		};

		render(
			<AuthContext.Provider value={contextValue}>
				<PublicRoute>
					<h1>Public route</h1>
				</PublicRoute>
			</AuthContext.Provider>
		);

		expect(screen.getByText('Public route')).toBeTruthy();
	});

	test('Should navigate if the user is authenticated', () => {
		const contextValue = {
			logged: true,
			user: {
				name: 'Bryan',
				id: '123',
			},
		};

		render(
			<AuthContext.Provider value={contextValue}>
				<MemoryRouter initialEntries={['/login']}>
					<Routes>
						<Route
							path='login'
							element={
								<PublicRoute>
									<h1>Public route</h1>
								</PublicRoute>
							}
						/>
						<Route path='marvel' element={<h1>Marvel page</h1>} />
					</Routes>
				</MemoryRouter>
			</AuthContext.Provider>
		);

		expect(screen.getByText('Marvel page')).toBeTruthy();
	});
});
