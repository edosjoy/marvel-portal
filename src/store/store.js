import {createStore} from "redux";

import rootReducer from "./reducers";
import {setStateToLocalStorage} from "../utils/localStorage";
import {STATE_IN_LOCAL_STORAGE} from "./constants/keysLocalStorage";

const store = createStore(rootReducer);

store.subscribe(() => {
	setStateToLocalStorage(STATE_IN_LOCAL_STORAGE, store.getState().favoriteReducer);
});

export default store;
