import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const HeroCard = ({
	id,
	superhero,
	publisher,
	alterEgo,
	firstAppearance,
	characters,
}) => {
	const heroImageUrl = `/src/assets/heroes/${id}.jpg`;

	return (
		<div className='col-12 col-md-3'>
			<div className='card'>
				<div className='row no-gutters'>
					<div className='col-4'>
						<img className='card-img' src={heroImageUrl} alt={superhero} />
					</div>
					<div className='col-8'>
						<div className='card-body'>
							<h5 className='card-title'>{superhero}</h5>
							<p className='card-text'>{alterEgo}</p>
							{alterEgo !== characters && <p>{characters}</p>}
							<p className='card-text'>
								<small className='text-mute'>{firstAppearance}</small>
							</p>
							<Link to={`/hero/${id}`}>More information...</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

HeroCard.propTypes = {
	id: PropTypes.string.isRequired,
	superhero: PropTypes.string.isRequired,
	publisher: PropTypes.string.isRequired,
	alterEgo: PropTypes.string.isRequired,
	firstAppearance: PropTypes.string.isRequired,
	characters: PropTypes.string.isRequired,
};
