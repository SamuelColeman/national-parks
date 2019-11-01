import React from 'react';
import './ParkCard.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export const ParkCard = ({ name, designation, id }) => {
	return (
		<Link to={`/parks/${id}`}>
			<section>
				<h2>{name}</h2>
				<h3>{designation}</h3>
			</section>
		</Link>
	)
}

export default ParkCard;