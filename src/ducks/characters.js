const SET_CHARACTERS = "SET_CHARACTERS";
const SET_VEHICLES = "SET_VEHICLES"

const initialState = {
	  characters: []
	, loadingCharacters: false
	, loadingVehicles: false
	, vehicles : []
}

export default function characters ( state = initialState, action ){
	switch ( action.type ) {
		case SET_CHARACTERS + "_PENDING":
			return {
				characters: state.characters,
				loadingCharacters: true,
				vehicles: state.vehicles,
				loadingVehicles: false
			}
		case SET_CHARACTERS+ "_FULFILLED":
			return {
				characters: action.payload,
				loadingCharacters: false,
				vehicles: state.vehicles,
				loadingVehicles: false
			}
		case SET_VEHICLES + "_PENDING":
			return {
				characters: state.characters,
				loadingCharacters: false,
				vehicles: [],
				loadingVehicles: true
			}
			case SET_VEHICLES + "_FULFILLED":
				return {
					characters: state.characters,
					loadingCharacters: false,
					vehicles: action.payload,
					loadingVehicles: false
				}
		default: return state;
	}
}

export function thing() {

}

export function setCharacters( charactersPromise ){
	return {
		type: SET_CHARACTERS,
		payload: charactersPromise
	}
}
export function setVehicles ( vehiclesPromise ){
	return {
		type: SET_VEHICLES,
		payload: vehiclesPromise
	}
}
