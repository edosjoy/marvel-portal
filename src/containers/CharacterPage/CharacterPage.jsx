import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import styles from './CharacterPage.module.scss';

import BannerNewComics from "../../components/BannerNewComics/BannerNewComics";
import networkService from "../../utils/network";
import Spinner from "../../components/spinner/Spinner";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";

const CharacterPage = () => {
	const [characterInfo, setCharacterInfo] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const {getRandomCharacter} = networkService();
	const idCharacter = useParams().id;

	useEffect(() => {
		setSpinnerAndError(true, false);
		getRandomCharacter(idCharacter).then(setNewCharacterInfo).catch(() => setSpinnerAndError(false, true));
	}, []);

	const setSpinnerAndError = (spin, err) => {
		setIsLoading(spin);
		setIsError(err);
	}

	const setNewCharacterInfo = (data) => {
		setCharacterInfo(data);
		setSpinnerAndError(false, false);
	}

	return (
		<div className={styles["character"]}>
			<div className={"character__container"}>

				<BannerNewComics />

				{isLoading ? <Spinner /> : null}
				{isError ? <ErrorMessage /> : null}
				{!isLoading && !isError ? <ViewCharacterInfo characterInfo={characterInfo} /> : null}

			</div>
		</div>
	);
};

export default CharacterPage;

const ViewCharacterInfo = ({characterInfo}) => {
	return (
		<div className={styles["character__info"]}>
			<img src={characterInfo.image} alt={characterInfo.name} className={styles["character__info-image"]}/>
			<div className={styles["character__info-block"]}>
				<h1 className={styles["character__info-heading"]}>{characterInfo.name}</h1>
				<div className={styles["character__info-description"]}>
					{characterInfo.description}
				</div>
			</div>
		</div>
	)
}
