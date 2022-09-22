import { useNavigate, Navigate, useParams } from 'react-router-dom';
import { getHeroeById } from '../utils';

export const HeroPage = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const hero = getHeroeById(id);

	const handleNavigate = () => {
		navigate(-1);
	};

	if (!hero) return <Navigate to={'/marvel'} />;

	return (
		<div className='row'>
			<div className='col-4'>
				<img
					src={`/src/assets/heroes/${id}.jpg`}
					alt={hero.superhero}
					className='img-thumbnail'
				/>
			</div>
			<div className='col-8'>
				<h3>{hero.superhero} </h3>
				<ul className='list-group list-group-flush'>
					<li className='list-group-item'>
						<b>Alter ego: </b>
						{hero.alterEgo}
					</li>
					<li className='list-group-item'>
						<b>Publisher: </b>
						{hero.publisher}
					</li>
					<li className='list-group-item'>
						<b>First appearance: </b>
						{hero.firstAppearance}
					</li>
				</ul>
				<h5 className='mt-4'>Characters</h5>
				<p>{hero.characters}</p>

				<button onClick={handleNavigate} className='btn btn-outline-primary'>
					Back
				</button>
			</div>
		</div>
	);
};
