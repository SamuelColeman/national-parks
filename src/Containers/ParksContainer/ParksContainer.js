import React from 'react';
import ParkCard from '../ParkCard/ParkCard';
import './ParksContainer.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export const ParksContainer = ({ parks }) => {
	const mappedParks = parks.forEach(park => {
		return <ParkCard {...park} />
	})
	return (
		<section>
			<h1>National Parks</h1>
			<input type='text' placeholder='Search' />
			<button>Search</button>
			<div>{}</div>
		</section>
	)
}

export const mapStateToProps = (state) => ({
  parks: state.parks
})

export default connect(mapStateToProps)(ParksContainer);