import styles from './CharacterListItem.module.scss';

import FavoriteHeart from "../FavoriteHeart/FavoriteHeart";

const CharacterListItem = ({id, name, image, getCharacterId, isFavorite}) => {
	return (
		<div className={styles["character-list-item"]} onClick={() => getCharacterId(id)}>
			<img src={image} alt={name} className={styles["character-list-item__image"]}/>
			<FavoriteHeart id={id} image={image} name={name} type='character' isHeartOn={isFavorite} />
			<div className={styles["character-list-item__heading"]}>{name}</div>
		</div>
	);
};

export default CharacterListItem;
