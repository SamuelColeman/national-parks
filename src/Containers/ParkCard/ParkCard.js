import React from 'react';
import './ParkCard.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

export const ParkCard = ({ name, designation, id, parks, fullName, description, weatherInfo, page, parkCode, displayParkInfo, parkInfo }) => {
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
				<section onClick={(e) => displayParkInfo(parkCode, e)}>
					<button name='VisitorCenters'>Visitor Centers</button>
					<button name='Events'>Events</button>
					<button name='Alerts'>Alerts</button>
					<button name='Campgrounds'>Campgrounds</button>
				</section>
			</section>
		)
	}
}

export const mapStateToProps = (state) => ({
  parks: state.parks,
  parkInfo: state.parkInfo
})

export default connect(mapStateToProps)(ParkCard);