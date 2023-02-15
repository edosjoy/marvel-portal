export const getStateFromLocalStorage = key => {
	if (localStorage.getItem(key)) {
		return JSON.parse(localStorage.getItem(key));
	}

	return {};
}

export const setStateToLocalStorage = (key, state) => {
	localStorage.setItem(key, JSON.stringify(state));
}
