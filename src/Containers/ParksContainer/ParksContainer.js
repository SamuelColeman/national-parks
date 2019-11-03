import React from 'react';
import ParkCard from '../ParkCard/ParkCard';
import './ParksContainer.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export const ParksContainer = ({ parks, selectedState, isLoading, displayParkInfo, handleSearch, errorMsg }) => {
	const mappedParks = parks.map(park => {
		return <ParkCard {...park} page={false} displayParkInfo={displayParkInfo}/>
	})
	return (
		<section className='parks_container'>
			<section className='parks_container-header'>
				<h1 className='parks_container-header-title'>National Parks: {selectedState}</h1>
				<Link to='/'>
					<button>Select State</button>
				</Link>
			</section>
			<form className='parks_container-form'>
				<input onChange={(e) => handleSearch(e)} type='text' placeholder='Search' />
				<button>Search</button>
			</form>
			<section className='parks_container-cards'>
				<h1>{errorMsg}</h1>
				<div>{mappedParks}</div>
			</section>
		</section>
	)
}

export const mapStateToProps = (state) => ({
  parks: state.parks,
  selectedState: state.selectedState,
  errorMsg: state.errorMsg
})

export default connect(mapStateToProps)(ParksContainer);