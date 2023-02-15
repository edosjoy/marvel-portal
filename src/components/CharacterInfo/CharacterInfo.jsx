import {Link} from "react-router-dom";

import styles from './CharacterInfo.module.scss';
import cn from "classnames";

const CharacterInfo = ({characterInfo}) => {
	const {id, image, name, description, wikiLink, comics} = characterInfo;

	return (
		<div className={styles["character-info"]}>
			<div className={styles["character-info__header"]}>
				<img src={image} alt={name} className={styles["character-info__image"]}/>
				<div className={styles["character-info__heading-and-buttons"]}>
					<h2 className={styles["character-info__heading"]}>{name}</h2>
					<Link to={`/marvel-portal/character/${id}`} className={cn("button", "button_red", "button_short", styles["character-info__btn-home-page"])}>
						<span className="inner">
							homepage
						</span>
					</Link>
					<a href={wikiLink} className={cn("button", "button_gray", "button_short", styles["character-info__btn-wiki"])} target="_blank">
						<span className="inner">
							wiki
						</span>
					</a>
				</div>
			</div>

			<div className={styles["character-info__description"]}>
				{description}
			</div>

			<div className={styles["character-info__comics"]}>
				<div className={styles["character-info__comics-heading"]}>Comics:</div>
				<div className={styles["character-info__comics-list"]}>
					{
						comics.map((comic, index) => {
								const id = comic.resourceURI.split('/')[comic.resourceURI.split('/').length - 1];
								return <Link key={index} to={`/marvel-portal/comics/${id}`} className={styles["character-info__comics-item"]}>{comic.name}</Link>;
							})
					}
				</div>
			</div>
		</div>
	);
};

export default CharacterInfo;
