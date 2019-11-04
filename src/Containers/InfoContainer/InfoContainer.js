import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import './InfoContainer.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export const InfoContainer = ({ parkInfo, infoName, parkId }) => {
	const mappedInfo = parkInfo.map(info => {
		return <InfoCard info={info}/>
	})
	if (mappedInfo.length > 0) {
		return (
			<section>
				<h1>{infoName}</h1>
				<Link to={`/parks/${parkId}`}>
					<button>Back</button>
				</Link>
				<div>{mappedInfo}</div>
			</section>
			)
	} else {
		return <h1>No Information Available</h1>
	}
}

export const mapStateToProps = (state) => ({
  parkInfo: state.parkInfo,
  infoName: state.infoName,
  parkId: state.parkId
})

export default connect(mapStateToProps)(InfoContainer);