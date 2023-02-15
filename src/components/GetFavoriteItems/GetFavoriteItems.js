import {useSelector} from "react-redux";

import CharacterListItem from "../CharacterListItem/CharacterListItem";
import {ViewTile} from "../../containers/ComicsPage/ComicsPage";

const GetFavoriteItems = (type) => {
	const state = useSelector(store => store.favoriteReducer);

	const resultFavoriteItems = [];

	for (let key in state) {
		if (state[key].type === type) {
			switch (type) {
				case 'character':
					resultFavoriteItems.push(<CharacterListItem
						key={key}
						id={key}
						name={state[key].name}
						image={state[key].image}
						isFavorite={true}
					/>);
					break;
				case 'comic':
					resultFavoriteItems.push(<ViewTile
						key={key} id={key}
						image={state[key].image}
						title={state[key].title}
						price={state[key].price}
						isFavorite={true}
					/>);
					break;
				default:
					break;
			}
		}
	}

	return resultFavoriteItems;
}

export default GetFavoriteItems;
