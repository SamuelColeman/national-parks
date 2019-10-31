import React from 'react';
import './ParkCard.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export const ParkCard = ({ fullName, designation, id }) => {
	return (
		<section key={id}>
			<h2>{fullName}</h2>
			<h3>{designation}</h3>
		</section>
	)
}

export default ParkCard;