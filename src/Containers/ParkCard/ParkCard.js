import React from 'react';
import './ParkCard.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export const ParkCard = ({ name, designation, id, parks, fullName, description, weatherInfo, page }) => {
	if (page === false) {
		return (
			<Link to={`/parks/${id}`}>
				<section className='park_card'>
					<h2>{name}</h2>
					<h3>{designation}</h3>
				</section>
			</Link>
		)
	} else {
		return (
			<section>
				<h1 className='park_card_title'>{fullName}</h1>
				<h1 className='park_card_p'>Overview:</h1>
				<h2 className='park_card_text'>{description}</h2>
				<h1 className='park_card_p'>Weather:</h1>
				<h2 className='park_card_text'>{weatherInfo}</h2>
			</section>
		)
	}
}

export const mapStateToProps = (state) => ({
  parks: state.parks
})

export default connect(mapStateToProps)(ParkCard);