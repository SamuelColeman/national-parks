import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import './InfoContainer.css';
import { connect } from 'react-redux';

export const InfoContainer = ({ parkInfo }) => {
	const mappedInfo = parkInfo.map(info => {
		return <InfoCard info={info}/>
	})
	return (
		<section>
			<div>{mappedInfo}</div>
		</section>
	)
}

export const mapStateToProps = (state) => ({
  parkInfo: state.parkInfo
})

export default connect(mapStateToProps)(InfoContainer);