import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../shared/hooks';
import { HeroCard } from '../components';
import queryString from 'query-string';
import { getHeroeByName } from '../utils';

export const SearchPage = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const { q = '' } = queryString.parse(location.search);

	const heroes = getHeroeByName(q);

	const { search, onInputChange } = useForm({
		search: q,
	});

	const onSubmit = (e) => {
		e.preventDefault();
		/* if (search.trim().length <= 1) return; */
		navigate(`?q=${search.toLowerCase().trim()}`);
	};

	return (
		<>
			<h1>Search</h1>
			<hr />
			<div className='row'>
				<div className='col-5'>
					<h4>Searching</h4>
					<hr />
					<form onSubmit={onSubmit}>
						<input
							type='text'
							className='form-control'
							name='search'
							id='search'
							placeholder='Search a hero'
							onChange={onInputChange}
							value={search}
						/>
						<button className='btn btn-success mt-3'>Search</button>
					</form>
				</div>
				<div className='col-7'>
					<h4>Results</h4>
					<hr />
					{q === '' ? (
						<div className='alert alert-primary'>Search a hero</div>
					) : (
						heroes.length === 0 && (
							<div className='alert alert-danger'>No results {q} </div>
						)
					)}

					{heroes.map((h) => (
						<HeroCard key={h.id} {...h} />
					))}
				</div>
			</div>
		</>
	);
};
