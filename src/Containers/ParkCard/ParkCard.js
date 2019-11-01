import React from 'react';
import './ParkCard.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

export const ParkCard = ({ name, designation, id, parks, fullName, description, weatherInfo, page, parkCode, displayVisitorCenters, visitorCenters }) => {
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
				<button onClick={() => displayVisitorCenters(parkCode)}>Visitor Centers</button>
				<button>Events</button>
				<button>Alerts</button>
				<button>Campgrounds</button>
			</section>
		)
	}
}

export const mapStateToProps = (state) => ({
  parks: state.parks,
  visitorCenters: state.visitorCenters
})

export default connect(mapStateToProps)(ParkCard);