import React from 'react';
import './InfoCard.css';
import { connect } from 'react-redux';

export const InfoCard = ({ infoName, info }) => {
	if (infoName === 'VisitorCenters') {
		return (
			<section>
				<h2 className='info_name_card'>{info.name}</h2>
				<h3 className='info_desc'>{info.description}</h3>
				<p>{info.url}</p>
			</section>
		)
	} else if (infoName === 'Events') {
		return (
			<section>
				<h2 className='info_name_card'>{info.title}</h2>
				<h3 className='info_desc'>{info.description}</h3>
			</section>
		)
	} else if (infoName === 'Alerts') {
		return (
			<section>
				<h2 className='info_name_card'>{info.title}</h2>
				<h3 className='info_desc'>{info.description}</h3>
			</section>
		)
	} else if (infoName === 'Campgrounds') {
		return (
			<section>
				<h2 className='info_name_card'>{info.name}</h2>
				<h3 className='info_desc'>{info.description}</h3>
			</section>
		)
	}
}

export const mapStateToProps = (state) => ({
  infoName: state.infoName
})

export default connect(mapStateToProps)(InfoCard);