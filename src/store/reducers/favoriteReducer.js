import * as actionsType from '../constants/actionTypes';

const initialCharactersState = {}

const favoriteCharactersReducer = (state = initialCharactersState, action = undefined) => {
	switch (action.type) {
		case actionsType.ADD_CHARACTER_TO_FAVORITE_LIST:
			return {
				...state,
				...action.payload
			}
		case actionsType.REMOVE_CHARACTER_FROM_FAVORITE_LIST:
			const newState = {};
			for (let key in state) {
				if (key !== action.payload) {
					newState[key] = state[key];
				}
			}
			return newState;
		default:
			return state;
	}
}

export default favoriteCharactersReducer;
