import React, { Component } from 'react';
import { connect } from "react-redux";
import './App.css';

import CharacterTile from "./components/CharacterTile";
import CharacterDetails from "./components/CharacterDetails";
import { getCharacters, getVehicles } from "./characterService";

class App extends Component {
	constructor(){
		super();
		this.state = {
			  activeCharacterIndex: null
		}
		this.selectActiveCharacter = this.selectActiveCharacter.bind(this)
	}
	componentDidMount() {
		getCharacters();
	}
	selectActiveCharacter ( index ){
		this.setState( { activeCharacterIndex: index } )
		getVehicles(this.props.characters[index].vehicles);
	}
  render() {
		const { characters, vehicles } = this.props;
		const { activeCharacterIndex } = this.state;
		const characterTiles = characters.map((character, index) => (
			<CharacterTile
				key={ character.url }
				name={ character.name }
				birthYear={ character.birth_year }
				selectCharacter={ this.selectActiveCharacter }
				index={ index }/>
		));
    return (
    	<div className="app">
            <aside className="app__character-tiles">
                {this.props.loadingCharacters
								?	"Loading... Please Wait"
								: characterTiles}
            </aside>
							{activeCharacterIndex	=== null ? "No Characters Selected"
							: <CharacterDetails
                  name={ characters[ activeCharacterIndex ].name }
                  born={ characters[ activeCharacterIndex ].birth_year }
                  gender={ characters[ activeCharacterIndex ].gender }
                  hairColor={ characters[ activeCharacterIndex ].hair_color }
                  eyeColor={ characters[activeCharacterIndex ].eye_color }
                  filmCount={ characters[ activeCharacterIndex ].films.length }
                  vehicles={ [...vehicles] }
                />}
        </div>
    );
  }
}




export default connect (state=>state)(App);
