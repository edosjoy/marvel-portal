import styles from './FavoriteComicsPage.module.scss';

import BannerNewComics from "../../components/BannerNewComics/BannerNewComics";
import LinksFavorite from "../../components/LinksFavorite/LinksFavorite";
import GetFavoriteItems from "../../components/GetFavoriteItems/GetFavoriteItems";

const FavoriteComicsPage = () => {
	return (
		<div className={styles['favorite-comics']}>
			<div className="favorite-comics__container">
				<BannerNewComics />
				<LinksFavorite />
				<h1 className={styles['favorite-comics__heading']}>Favorite Comics</h1>
				<div className={styles['favorite-comics__list']}>
					{
						GetFavoriteItems('comic')
					}
				</div>
			</div>
		</div>
	);
};

export default FavoriteComicsPage;
