import axios from "axios";
const BASE_URL = "http://swapi.co/api/"
import store from "./store"
import { setCharacters, setVehicles } from "./ducks/characters"

export function getCharacters (){
	const charactersPromise = axios.get(`${BASE_URL}people`).then(res => {
		return res.data.results
	})

	store.dispatch( setCharacters( charactersPromise ) );
}

export function getVehicles ( urlArray ) {
	const vehiclePromises = urlArray.map(url => axios.get(url));
	store.dispatch( setVehicles( Promise.all( vehiclePromises )
		.then(data => data.map(vehicle=> vehicle.data)) ) );
}
