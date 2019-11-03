import React from 'react';
import './InfoCard.css';
import { connect } from 'react-redux';

export const InfoCard = ({ infoName, info }) => {
	if (infoName === 'VisitorCenters') {
		console.log(info)
		return (
			<section>
				<h2>{info.name}</h2>
				<h3>{info.description}</h3>
				<p>{info.url}</p>
			</section>
		)
	} else if (infoName === 'Events') {
		console.log(info)
		return (
			<section>
				<h2>{info.title}</h2>
				<h3>{info.description}</h3>
			</section>
		)
	} else if (infoName === 'Alerts') {
		console.log(info)
		return (
			<section>
				<h2>{info.title}</h2>
				<h3>{info.description}</h3>
			</section>
		)
	} else if (infoName === 'Campgrounds') {
		console.log(info)
		return (
			<section>
				<h2>{info.name}</h2>
				<h3>{info.description}</h3>
			</section>
		)
	}
}

export const mapStateToProps = (state) => ({
  infoName: state.infoName
})

export default connect(mapStateToProps)(InfoCard);