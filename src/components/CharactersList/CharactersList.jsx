import cn from "classnames";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

import styles from './CharactersList.module.scss';

import CharacterListItem from "../CharacterListItem/CharacterListItem";
import networkService from "../../utils/network";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import {BASE_OFFSET, BASE_LIMIT} from "../../constants/api";

const CharactersList = ({getCharacterId}) => {
	const [updateComponent, setUpdateComponent] = useState();
	const [characters, setCharacters] = useState([]);
	const [offset, setOffset] = useState(BASE_OFFSET);
	const [limit, setLimit] = useState(BASE_LIMIT)
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	const state = useSelector(store => store.favoriteReducer);
	const stateKeys = Object.keys(state);

	const {getAllCharacters} = networkService();

	useEffect(() => {
		updateCharactersList();
	}, [updateComponent]);

	const setSpinnerAndError = (spin, err) => {
		setIsLoading(spin);
		setIsError(err);
	}

	const setNewListCharacters = (listCharacters) => {
		setCharacters([...characters, ...listCharacters]);
		setOffset(offset + limit);
		setSpinnerAndError(false, false);
	}

	const updateCharactersList = () => {
		setSpinnerAndError(true, false);
		getAllCharacters(offset, limit).then(setNewListCharacters).catch(() => setSpinnerAndError(false, true));
	}

	const setLimitCharactersList = (event) => {
		event.preventDefault();
		const t = event.target;

		if (t.getAttribute('data-number')) {
			setCharacters([]);
			setLimit(+t.innerText);
			setOffset(BASE_OFFSET);
			setUpdateComponent({});
		}
	}

	return (
		<div className={styles["character-list"]}>
			<div className={styles["character-list__items"]}>
				{characters.map(character => <CharacterListItem
					key={character.id}
					id={character.id}
					name={character.name}
					image={character.image}
					getCharacterId={getCharacterId}
					isFavorite={stateKeys.includes(`${character.id}`)}
				/>)}
			</div>

			{isLoading ? <Spinner /> : isError ? <ErrorMessage /> : null}

			<button className={cn("button", "button_red", "button_long", styles["character-list__btn-more"])} onClick={updateCharactersList}>
					<span className="inner">
						load more
					</span>
			</button>

			<div className={styles["character-list__limit-list"]} onClick={setLimitCharactersList}>
				<span>limit:</span>
				<Link to="#" data-number="true" className={(styles[limit === 9 ? "character-list__limit-link_active" : "character-list__limit-link"])}>9</Link>
				<Link to="#" data-number="true" className={styles[limit === 18 ? "character-list__limit-link_active" : "character-list__limit-link"]}>18</Link>
				<Link to="#" data-number="true" className={styles[limit === 36 ? "character-list__limit-link_active" : "character-list__limit-link"]}>36</Link>
			</div>
		</div>
	);
};

export default CharactersList;
