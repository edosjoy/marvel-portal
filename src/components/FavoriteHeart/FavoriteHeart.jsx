import cn from "classnames";
import {useState} from "react";
import {useDispatch} from "react-redux";

import styles from './FavoriteHeart.module.scss';

import actions from "../../store/actions";

const FavoriteHeart = ({id, image, name, title, price, type, isHeartOn}) => {
	const [heart, setHeart] = useState(isHeartOn);
	const dispatch = useDispatch();
	const {addItemToFavoriteList, removeItemFromFavoriteList} = actions();

	const changeHeart = (event) => {
		event.preventDefault();
		event.stopPropagation();

		if (!heart) {
			dispatch(addItemToFavoriteList({
				[id]: {
					type,
					name,
					title,
					image,
					price
				}
			}));
		} else {
			dispatch(removeItemFromFavoriteList(id));
		}

		setHeart(!heart);
	}

	return (
		<div className={cn(styles["heart"], styles[`heart_${!heart ? 'white' : 'red'}`])} onClick={changeHeart}></div>
	);
};

export default FavoriteHeart;
