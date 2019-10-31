import React from 'react';
import ParkCard from '../ParkCard/ParkCard';
import './ParksContainer.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

export const ParksContainer = ({ parks, selectedState }) => {
	const mappedParks = parks.map(park => {
		return <ParkCard {...park} />
	})
	return (
		<section>
			<h1>National Parks in {selectedState}</h1>
			<input type='text' placeholder='Search' />
			<button>Search</button>
			<div>{mappedParks}</div>
		</section>
	)
}

export const mapStateToProps = (state) => ({
  parks: state.parks,
  selectedState: state.selectedState
})

export default connect(mapStateToProps)(ParksContainer);