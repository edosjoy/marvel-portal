import {useState} from "react";
import cn from "classnames";

import styles from './Characters.module.scss';

import networkService from "../../utils/network";
import CharactersList from "../CharactersList/CharactersList";
import CharacterInfo from "../CharacterInfo/CharacterInfo";
import SkeletonCharacterInfo from "../SkeletonCharacterInfo/SkeletonCharacterInfo";
import ErrorMessage from "../errorMessage/ErrorMessage";

const Characters = () => {
	const [characterInfo, setCharacterInfo] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const {getRandomCharacter} = networkService();

	const setSpinnerAndError = (spin, err) => {
		setIsLoading(spin);
		setIsError(err);
	}

	const setNewCharacterInfo = (info) => {
		setCharacterInfo(info);
		setSpinnerAndError(false, false);
	}

	const getCharacter = (id) => {
		setSpinnerAndError(true, false);
		getRandomCharacter(id).then(setNewCharacterInfo).catch(() => {setSpinnerAndError(false, true)});
	}

	const getCharacterId = (id) => {
		getCharacter(id);
	}

	return (
		<section className={styles["characters"]}>
			<div className={cn("characters__container", styles["characters__wrapper"])}>
				<CharactersList getCharacterId={getCharacterId} />
				{
					isLoading ?
						<SkeletonCharacterInfo /> :
						isError ?
							<ErrorMessage /> :
							<CharacterInfo characterInfo={characterInfo} />
				}
			</div>
		</section>
	);
};

export default Characters;
