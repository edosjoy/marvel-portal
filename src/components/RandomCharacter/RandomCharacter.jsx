import cn from 'classnames';
import {useEffect, useState} from "react";

import styles from './RandomCharacter.module.scss';

import RandomCharacterInfo from "../RandomCharacterInfo/RandomCharacterInfo";
import networkService from "../../utils/network";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

const RandomCharacter = () => {
	const [randomCharacter, setRandomCharacter] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	const {getRandomCharacter} = networkService();

	useEffect(() => {
		updateRandomCharacter();
	}, []);

	const setSpinnerAndError = (spin, err) => {
		setIsLoading(spin);
		setIsError(err);
	}

	const setNewInfoCharacter = (char) => {
		setRandomCharacter(char);
		setSpinnerAndError(false, false);
	}

	const updateRandomCharacter = () => {
		setSpinnerAndError(true, false);
		const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
		getRandomCharacter(id).then(setNewInfoCharacter).catch(() => setSpinnerAndError(false, true));
	}

	return (
		<section className={styles["random-character"]}>
			<div className={"random-character__container"}>
				<div className={styles["random-character__wrapper"]}>

					<div className={styles["random-character__info"]}>
						{
							isLoading ? <Spinner /> :
								isError ? <ErrorMessage /> :
									<RandomCharacterInfo randomCharacter={randomCharacter} />
						}
					</div>

					<div className={cn(styles["random-character__try-it"], styles["try-random-character"])}>
						<div className={styles["try-random-character__description"]}>
							Random character for today!<br />Do you want to get to know him better?
						</div>
						<div className={styles["try-random-character__description"]}>
							Or choose another one
						</div>
						<div className={cn("button", "button_red", "button_short", styles["try-random-character__button"])} onClick={updateRandomCharacter}>
							<span className="inner">
								try it
							</span>
						</div>
					</div>

				</div>
			</div>
		</section>
	);
};

export default RandomCharacter;
