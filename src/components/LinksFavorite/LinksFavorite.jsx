import {Link, NavLink} from "react-router-dom";
import cn from "classnames";

import styles from './LinksFavorite.module.scss';

const LinksFavorite = () => {

	return (
		<div className={styles['links-favorite']}>
			<NavLink to='/marvel-portal/favorite/characters' className={styles['links-favorite__link']}>Characters</NavLink>
			<span className={styles["links-favorite__separator"]}>/</span>
			<NavLink to='/marvel-portal/favorite/comics' className={styles['links-favorite__link']}>Comics</NavLink>
		</div>
	);
};

export default LinksFavorite;
