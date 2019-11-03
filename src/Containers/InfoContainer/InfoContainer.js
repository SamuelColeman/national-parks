import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import './InfoContainer.css';
import { connect } from 'react-redux';

export const InfoContainer = ({ parkInfo, infoName }) => {
	const mappedInfo = parkInfo.map(info => {
		return <InfoCard info={info}/>
	})
	if (mappedInfo.length > 1) {
		return (
			<section>
			<h1>{infoName}</h1>
				<div>{mappedInfo}</div>
			}
			</section>
		)
	} else {
		return <h1>No Information Available</h1>
	}
}

export const mapStateToProps = (state) => ({
  parkInfo: state.parkInfo,
  infoName: state.infoName
})

export default connect(mapStateToProps)(InfoContainer);