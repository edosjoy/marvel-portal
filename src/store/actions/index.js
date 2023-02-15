import * as actionsType from '../constants/actionTypes';

const actions = () => {
	return {
		addItemToFavoriteList: newItem => ({
			type: actionsType.ADD_ITEM_TO_FAVORITE_LIST,
			payload: newItem,
		}),
		removeItemFromFavoriteList: idItem => ({
			type: actionsType.REMOVE_ITEM_FROM_FAVORITE_LIST,
			payload: idItem,
		}),
	}
}

export default actions;
