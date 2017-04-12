import React, { PropTypes } from "react";

import "./CharacterDetails.css";

import VehicleInfo from "./VehicleInfo";

export default function CharacterDetails( { name, born, gender, hairColor, eyeColor, filmCount, vehicles } ) {
	const vehicleInfo = vehicles.map(v=>{
		return (
		<VehicleInfo
			key={ v.url }
			model={ v.model }
			name={ v.name }
			manufacturer={ v.manufacturer }
			cost={ v.cost_in_credits } />
	)})
	return (
		<div className="character-details">
			<h1>{ name }</h1>
			<h3>Stats</h3>
			<ul className="character-details__stats-list">
				<li>Born { born }</li>
				<li>Gender: { gender }</li>
				<li>Hair Color: { hairColor }</li>
				<li>Eye Color: { eyeColor }</li>
				<li>Active in { filmCount } films</li>
			</ul>

			<h3>Vehicles</h3>
			{ vehicleInfo }
		</div>
	);
}

CharacterDetails.propTypes = {
	  name: PropTypes.string.isRequired
	, born: PropTypes.string.isRequired
	, gender: PropTypes.oneOf( [ "male", "female", "n/a" ] ).isRequired
	, hairColor: PropTypes.string.isRequired
	, eyeColor: PropTypes.string.isRequired
	, filmCount: PropTypes.number.isRequired
	, vehicles: PropTypes.array.isRequired
};
