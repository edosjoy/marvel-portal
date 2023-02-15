import HomePage from "../containers/HomePage/HomePage";
import ComicsPage from "../containers/ComicsPage/ComicsPage";
import ComicPage from "../containers/ComicPage/ComicPage";
import ErrorPage from "../containers/ErrorPage/ErrorPage";
import CharacterPage from "../containers/CharacterPage/CharacterPage";
import FavoriteCharactersPage from "../containers/FavoriteCharactersPage/FavoriteCharactersPage";
import FavoriteComicsPage from "../containers/FavoriteComicsPage/FavoriteComicsPage";

const RoutesConfig = [
	{
		path: '/marvel-portal',
		element: <HomePage />,
	},
	{
		path: '/marvel-portal/comics',
		element: <ComicsPage />
	},
	{
		path: '/marvel-portal/comics/:id',
		element: <ComicPage />
	},
	{
		path: '/marvel-portal/character/:id',
		element: <CharacterPage />
	},
	{
		path: '/marvel-portal/favorite/characters',
		element: <FavoriteCharactersPage />
	},
	{
		path: '/marvel-portal/favorite/comics',
		element: <FavoriteComicsPage />
	},
	{
		path: '*',
		element: <ErrorPage />
	}
];

export default RoutesConfig;
