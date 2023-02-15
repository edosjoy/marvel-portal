import {useState, useEffect} from "react";
import cn from "classnames";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

import styles from './ComicsPage.module.scss';

import BannerNewComics from "../../components/BannerNewComics/BannerNewComics";
import networkService from "../../utils/network";
import Spinner from "../../components/spinner/Spinner";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";
import FavoriteHeart from "../../components/FavoriteHeart/FavoriteHeart";

const ComicsPage = () => {
	const [comics, setComics] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [offset, setOffset] = useState(0);
	const limit = 8;
	const {getAllComics} = networkService();
	const state = useSelector(store => store.favoriteReducer);
	const stateKeys = Object.keys(state);

	useEffect(() => {
		updateComics();
	}, []);

	const setSpinnerAndError = (spin, err) => {
		setIsLoading(spin);
		setIsError(err);
	}

	const updateComics = () => {
		setSpinnerAndError(true, false);
		getAllComics(offset, limit).then(setNewComicsList).catch(() => setSpinnerAndError(false, true));
	}

	const setNewComicsList = (data) => {
		setComics([...comics, ...data]);
		setSpinnerAndError(false, false);
		setOffset(offset + limit);
	}

	return (
		<div className={styles["comics"]}>
			<div className="comics__container">
				<BannerNewComics />
				<div className={styles["comics__list"]}>
					{
						comics.map((comic, index) => <ViewTile
							key={index}
							id={comic.id}
							image={comic.image}
							title={comic.title}
							price={comic.price}
							isFavorite={stateKeys.includes(`${comic.id}`)}
						/>)
					}
				</div>
				{isLoading ? <Spinner /> : null}
				{isError ? <ErrorMessage /> : null}
				<button className={cn("button", "button_red", "button_long", styles["comics__btn-more"])} onClick={updateComics}>
					<span className="inner">
						load more
					</span>
				</button>
			</div>
		</div>
	);
};

export default ComicsPage;

export const ViewTile = ({id, image, title, price, isFavorite}) => {
	return (
			<div className={styles["comics__list-item"]}>
				<Link to={`/comics/${id}`} className={styles["comics__list-item-link"]}>
					<img src={image} alt={title} className={styles["comics__list-item-img"]}/>
					<FavoriteHeart id={id} image={image} title={title} price={price} type='comic' isHeartOn={isFavorite} />
					<span className={styles["comics__list-item-heading"]}>{title}</span>
					<span className={styles["comics__list-item-price"]}>{price > 0 ? `${price}$` : 'no price'}</span>
				</Link>
			</div>
	);
}
