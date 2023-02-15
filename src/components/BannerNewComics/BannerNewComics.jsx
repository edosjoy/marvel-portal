import styles from './BannerNewComics.module.scss';
import heroesSvg from "./images/banner-heroes.png";
import logoSvg from "./images/banner-logo.png";

const BannerNewComics = () => {
	return (
		<div className={styles["banner-comics"]}>
			<img src={heroesSvg} className={styles["banner-comics__heroes-image"]} />
			<div className={styles["banner-comics__description"]}>
				New comics every week! Stay tuned!
			</div>
			<img src={logoSvg} className={styles["banner-comics__logo-image"]} />
		</div>
	);
};

export default BannerNewComics;
