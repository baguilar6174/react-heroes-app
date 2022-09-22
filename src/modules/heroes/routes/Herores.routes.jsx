import { Navigate, Route, Routes } from 'react-router-dom';
import { Nabvar } from '../../shared/components';
import { MarvelPage, DCPage, SearchPage, HeroPage } from '../pages';

export const HeroresRoutes = () => {
	return (
		<>
			<Nabvar />
			<div className='container'>
				<Routes>
					<Route path='marvel' element={<MarvelPage />} />
					<Route path='dc' element={<DCPage />} />
					<Route path='search' element={<SearchPage />} />
					<Route path='hero' element={<HeroPage />} />
					<Route path='/' element={<Navigate to={'/marvel'} />} />
				</Routes>
			</div>
		</>
	);
};
