import styles from './FavoriteCharactersPage.module.scss';

import BannerNewComics from "../../components/BannerNewComics/BannerNewComics";
import LinksFavorite from "../../components/LinksFavorite/LinksFavorite";
import GetFavoriteItems from "../../components/GetFavoriteItems/GetFavoriteItems";

const FavoriteCharactersPage = () => {

	return (
		<div className={styles['favorite-characters']}>
			<div className="favorite-characters__container">
				<BannerNewComics />
				<LinksFavorite />
				<h1 className={styles['favorite-characters__heading']}>Favorite Characters</h1>
				<div className={styles['favorite-characters__list']}>
					{
						GetFavoriteItems('character')
					}
				</div>
			</div>
		</div>
	);
};

export default FavoriteCharactersPage;
