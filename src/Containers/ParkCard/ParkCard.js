import React from 'react';
import './ParkCard.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getParkId } from '../../actions';
import { bindActionCreators } from 'redux';

export const ParkCard = ({ name, designation, id, parks, fullName, description, weatherInfo, page, parkCode, displayParkInfo, parkInfo, infoName, getParkId, parkId }) => {
	if (page === false) {
		return (
			<Link onClick={() => getParkId(id)} to={`/parks/${id}`}>
				<section className='park_card'>
					<h2 className='park_card_t'>{name}</h2>
					<h3 className='park_card_d'>{designation}</h3>
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
					<Link to={`/parks/${id}/VisitorCenters`}>
						<button name='VisitorCenters'>Visitor Centers</button>
					</Link>
					<Link to={`/parks/${id}/Events`}>
						<button name='Events'>Events</button>
					</Link>
					<Link to={`/parks/${id}/Alerts`}>
						<button name='Alerts'>Alerts</button>
					</Link>
					<Link to={`/parks/${id}/Campgrounds`}>
						<button name='Campgrounds'>Campgrounds</button>
					</Link>
				</section>
				<Link to='/parks'>
					<button>Back</button>
				</Link>
			</section>
		)
	}
}

export const mapStateToProps = (state) => ({
  parks: state.parks,
  parkInfo: state.parkInfo,
  infoName: state.infoName,
  parkId: state.parkId
})

export const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
  	getParkId
  }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(ParkCard);