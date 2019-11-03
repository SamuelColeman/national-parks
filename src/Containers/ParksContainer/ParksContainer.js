import React from 'react';
import ParkCard from '../ParkCard/ParkCard';
import './ParksContainer.css';
import { connect } from 'react-redux';

export const ParksContainer = ({ parks, selectedState, isLoading, displayParkInfo, handleSearch }) => {
	const mappedParks = parks.map(park => {
		return <ParkCard {...park} page={false} displayParkInfo={displayParkInfo}/>
	})
	return (
		<section className='parks_container'>
			<h1 className='parks_container-header'>National Parks: {selectedState}</h1>
			<form className='parks_container-form'>
				<input onChange={(e) => handleSearch(e)} type='text' placeholder='Search' />
				<button>Search</button>
			</form>
			<div className='parks_container-cards'>{mappedParks}</div>
		</section>
	)
}

export const mapStateToProps = (state) => ({
  parks: state.parks,
  selectedState: state.selectedState
})

export default connect(mapStateToProps)(ParksContainer);