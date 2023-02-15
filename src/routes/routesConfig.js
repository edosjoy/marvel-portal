import HomePage from "../containers/HomePage/HomePage";
import ComicsPage from "../containers/ComicsPage/ComicsPage";
import ComicPage from "../containers/ComicPage/ComicPage";
import ErrorPage from "../containers/ErrorPage/ErrorPage";
import CharacterPage from "../containers/CharacterPage/CharacterPage";
import FavoriteCharactersPage from "../containers/FavoriteCharactersPage/FavoriteCharactersPage";
import FavoriteComicsPage from "../containers/FavoriteComicsPage/FavoriteComicsPage";

const RoutesConfig = [
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: 'comics',
		element: <ComicsPage />
	},
	{
		path: 'comics/:id',
		element: <ComicPage />
	},
	{
		path: 'character/:id',
		element: <CharacterPage />
	},
	{
		path: 'favorite/characters',
		element: <FavoriteCharactersPage />
	},
	{
		path: 'favorite/comics',
		element: <FavoriteComicsPage />
	},
	{
		path: '*',
		element: <ErrorPage />
	}
];

export default RoutesConfig;
