import React, { PropTypes } from "react";

import "./CharacterTile.css";

export default function CharacterTile( { name, birthYear, selectCharacter, index } ) {
	return (
		<div className="character-tile" onClick={ () => selectCharacter(index) }>
			<h3 className="character-tile__name">
				{ name }
			</h3>
			<p className="character-tile__info">Born: { birthYear }</p>
		</div>
	);
}

CharacterTile.propTypes = {
	  name: PropTypes.string.isRequired
	, birthYear: PropTypes.string.isRequired
};
