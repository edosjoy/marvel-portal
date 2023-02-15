import {BASE_URL, API_KEY, FOLDER_SEARCH_CHARACTER, FOLDER_SEARCH_COMICS, BASE_OFFSET, BASE_LIMIT} from "../constants/api";

const networkService = () => {
	const request = async (url) => {
		try {
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error(`Could not fetch ${url}. Status ${response.statusText}`);
			}
			return await response.json();
		} catch (error) {
			throw error;
		}
	}

	const transformCharacter = (character) => {
		return {
			id: character.id,
			image: `${character.thumbnail.path}.${character.thumbnail.extension}`,
			name: character.name,
			description: character.description.length === 0 ? 'No description' : character.description,
			homePageLink: character.urls[0].url,
			wikiLink: character.urls[1].url,
			comics: character.comics.items,
		}
	}

	const transformComic = (comic) => {
		return {
			id: comic.id,
			image: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
			title: comic.title,
			price: comic.prices[0].price,
			pageCount: comic.pageCount,
			language: comic.textObjects.length > 0 ? comic.textObjects[0].language : 'no information',
			description: comic.description ? comic.description : 'no description',
		}
	}

	const getRandomCharacter = async (id) => {
		// URL запроса героя по ID
		// https://gateway.marvel.com:443/v1/public/characters/1011400?apikey=3062ce4741872a60d31c37bce7a990f1
		const response = await request(`${BASE_URL}/${FOLDER_SEARCH_CHARACTER}/${id}?apikey=${API_KEY}`);
		return transformCharacter(response.data.results[0]);
	}

	const getAllCharacters = async (offset = BASE_OFFSET, limit = BASE_LIMIT) => {
		// URL запроса списка героев
		// https://gateway.marvel.com:443/v1/public/characters?limit=9&offset=210&apikey=3062ce4741872a60d31c37bce7a990f1
		const response = await request(`${BASE_URL}/${FOLDER_SEARCH_CHARACTER}?limit=${limit}&offset=${offset}&apikey=${API_KEY}`);
		return response.data.results.map(character => transformCharacter(character));
	}

	const getAllComics = async (offset = 0, limit = 8) => {
		// URL для запроса списка комиксов
		// https://gateway.marvel.com:443/v1/public/comics?limit=8&offset=1?apikey=3062ce4741872a60d31c37bce7a990f1
		const response = await request(`${BASE_URL}/${FOLDER_SEARCH_COMICS}?limit=${limit}&offset=${offset}&apikey=${API_KEY}`);
		return response.data.results.map(transformComic);
	}

	const getSingleComic = async (id) => {
		// URL для запроса одного комикса
		// https://gateway.marvel.com:443/v1/public/comics/82970?apikey=3062ce4741872a60d31c37bce7a990f1
		console.log(`${BASE_URL}/${FOLDER_SEARCH_COMICS}/${id}?apikey=${API_KEY}`);
		const response = await request(`${BASE_URL}/${FOLDER_SEARCH_COMICS}/${id}?apikey=${API_KEY}`);
		return transformComic(response.data.results[0]);
	}

	return {getRandomCharacter, getAllCharacters, getAllComics, getSingleComic};
}

export default networkService;
