import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { getHeroesByPublisher } from '../utils';
import { HeroCard } from './';

export const HeroList = ({ publisher }) => {
	const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

	return (
		<div className='row row-cols-1 row-cols-md-3 g-4'>
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
