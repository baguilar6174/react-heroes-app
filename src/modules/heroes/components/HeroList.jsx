import PropTypes from 'prop-types';
import { getHeroesByPublisher } from '../utils';
import { HeroCard } from './';

export const HeroList = ({ publisher }) => {
	const heroes = getHeroesByPublisher(publisher);

	return (
		<div className='row'>
			{heroes.map((hero) => (
				<HeroCard key={hero.id} {...hero} />
			))}
		</div>
	);
};

HeroList.propTypes = {
	publisher: PropTypes.string.isRequired,
};

/* HeroList.defaultProps = {
	publisher: 'DC Comics',
}; */
