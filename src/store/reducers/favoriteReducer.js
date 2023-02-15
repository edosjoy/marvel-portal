import * as actionsType from '../constants/actionTypes';
import {getStateFromLocalStorage} from "../../utils/localStorage";
import {STATE_IN_LOCAL_STORAGE} from "../constants/keysLocalStorage";

const initialCharactersState = getStateFromLocalStorage(STATE_IN_LOCAL_STORAGE);

const favoriteReducer = (state = initialCharactersState, action = undefined) => {
	switch (action.type) {
		case actionsType.ADD_ITEM_TO_FAVORITE_LIST:
			return {
				...state,
				...action.payload
			}
		case actionsType.REMOVE_ITEM_FROM_FAVORITE_LIST:
			const newState = {};
			for (let key in state) {
				if (+key !== +action.payload) {
					newState[key] = state[key];
				}
			}
			return newState;
		default:
			return state;
	}
}

export default favoriteReducer;
