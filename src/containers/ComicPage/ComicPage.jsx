import {Link, useParams} from "react-router-dom";
import {useState, useEffect} from "react";

import styles from './ComicPage.module.scss';

import BannerNewComics from "../../components/BannerNewComics/BannerNewComics";
import networkService from "../../utils/network";
import Spinner from "../../components/spinner/Spinner";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";

const ComicPage = () => {
	const [comicData, setComicData] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const idComic = useParams().id;
	const {getSingleComic} = networkService();

	useEffect(() => {
		getComicData();
	}, []);

	const setSpinnerAndError = (spin, err) => {
		setIsLoading(spin);
		setIsError(err);
	}

	const getComicData = () => {
		setSpinnerAndError(true, false);
		getSingleComic(idComic).then(updateInfoComic).catch((error) => {
			console.error(error);
			setSpinnerAndError(false, true)
		});
	}

	const updateInfoComic = (data) => {
		setComicData(data);
		setSpinnerAndError(false, false);
	}

	return (
		<div className={styles["comic"]}>
			<div className="comic__container">
				<BannerNewComics />
				<div className={styles["comic__info"]}>
					{
						isError
							? <ErrorMessage />
							: isLoading
								? <Spinner />
								: <ViewComicData data={comicData} />
					}
					<div className={styles["comic__info-back-btn"]}>
						<Link to='/comics' className={styles["comic__info-back-btn-link"]}>Back to all</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ComicPage;

const ViewComicData = ({data}) => {
	return (
		<>
			<img src={data.image} alt={data.title} className={styles["comic__info-image"]}/>
			<div className={styles["comic__info-description"]}>
				<h1 className={styles["comic__info-description-heading"]}>{data.title}</h1>
				<div className={styles["comic__info-description-text"]}>
					<p>{data.description}</p>
					<p>{data.pageCount} pages</p>
					<p>Language: {data.language}</p>
				</div>
				<div className={styles["comic__info-description-price"]}>{
					data.price > 0 ? `${data.price}$` : 'no price'
				}</div>
			</div>
		</>
	);
}
