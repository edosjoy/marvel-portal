import {Link} from "react-router-dom";

import styles from './RandomCharacterInfo.module.scss';
import cn from "classnames";

const RandomCharacterInfo = ({randomCharacter}) => {
	const {id, image, name, description, wikiLink} = randomCharacter;

	return (
		<>
			<img src={image} alt={name} className={styles["info-random-character__image"]} />
			<div className={styles["info-random-character__description"]}>
				<div className={styles["info-random-character__heading"]}>
					{name}
				</div>
				<div className={styles["info-random-character__text"]}>
					{
						description && description.length > 230 ? `${description.slice(0, 225)}...` : description
					}
				</div>
				<div className={styles["info-random-character__buttons"]}>
					<Link to={`character/${id}`} className={cn("button", "button_red", "button_short", styles["info-random-character__btn-home-page"])}>
						<span className="inner">
							homepage
						</span>
					</Link>
					<a href={wikiLink} className={cn("button", "button_gray", "button_short", styles["info-random-character__btn-wiki"])} target="_blank">
						<span className="inner">
							wiki
						</span>
					</a>
				</div>
			</div>
		</>
	);
};

export default RandomCharacterInfo;
