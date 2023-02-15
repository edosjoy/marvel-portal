import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

import styles from './Header.module.css';

const Header = () => {
	const state = useSelector(store => store.favoriteReducer);

	const openAndCloseMobileMenu = (action, event = undefined) => {
		action = action === 'open' ? 'add' : 'remove';

		if (event) {
			if (event.target.classList.contains(styles["header__nav-link"])) {
				actionMobileMenu(action);
			}
		} else {
			actionMobileMenu(action)
		}

		function actionMobileMenu(action) {
			const
				bodyTag = document.querySelector('body'),
				headNav = document.querySelector('#main-nav');

			bodyTag.classList[action]('mobile-menu-open');
			headNav.classList[action](styles["header__nav-active"]);
		}
	}

	return (
		<header className={styles["header"]}>
			<div className="header__container">
				<div className={styles["header__wrapper"]}>

					<NavLink to="/marvel-portal/" className={styles["header__logo"]}>
						<span className={styles["header__logo-red-word"]}>Marvel</span> information portal
					</NavLink>

					<nav className={styles.header__nav} id="main-nav" onClick={(event) => openAndCloseMobileMenu('close', event)}>
						<NavLink to="/marvel-portal/" className={styles["header__nav-link"]}>
							Characters
						</NavLink>
						<span className={styles["header__nav-sep"]}>/</span>
						<NavLink to="/marvel-portal/comics" className={styles["header__nav-link"]}>
							Comics
						</NavLink>
						<span className={styles["header__nav-sep"]}>/</span>
						<NavLink to="/marvel-portal/favorite/characters" className={styles["header__nav-link"]}>
							My Favorite ({Object.keys(state).length})
						</NavLink>
						<div className={styles["header__close-mobile-menu"]} onClick={() => openAndCloseMobileMenu('close')}></div>
					</nav>

					<div className={styles["header__burger"]} onClick={() => openAndCloseMobileMenu('open')}>
						<span className={styles["header__burger-line"]}></span>
					</div>

				</div>
			</div>
		</header>
	);
};

export default Header;
