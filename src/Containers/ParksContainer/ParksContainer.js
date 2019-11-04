import React from 'react';
import ParkCard from '../ParkCard/ParkCard';
import './ParksContainer.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export const ParksContainer = ({ parks, selectedState, displayParkInfo, handleSearch, errorMsg, loading, submitState }) => {
	const mappedParks = parks.map(park => {
		return <ParkCard {...park} page={false} displayParkInfo={displayParkInfo}/>
	})
	return (
		<section className='parks_container'>
			<section className='parks_container-header'>
				<h1 className='parks_container-header-title'>National Parks: {selectedState}</h1>
				<Link to='/'>
					<button className='parks_container-header-button'>Select State</button>
				</Link>
			</section>
			<form className='parks_container-form'>
			<button className='parks_container-search-btn' type='button' onClick={() => submitState(selectedState)}>All</button>
				<input className='parks_container-search' onChange={(e) => handleSearch(e)} type='text' placeholder='Search'/>
			</form>
			<section className='parks_container-cards'>
				{loading && <h1 className='parks_container-loading'>Loading...</h1>}
				{errorMsg && <h1>{errorMsg}</h1>}
				<div className='parks_container-cards'>{mappedParks}</div>
			</section>
		</section>
	)
}

export const mapStateToProps = (state) => ({
  parks: state.parks,
  selectedState: state.selectedState,
  errorMsg: state.errorMsg,
  loading: state.loading
})

export default connect(mapStateToProps)(ParksContainer);