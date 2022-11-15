import * as actions from "./ActionTypes";

const initialState = {
    movies: [],
    favourites: window.localStorage.getItem("favourite") ? JSON.parse(window.localStorage.getItem("favourite")) : [],
}

export const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_MOVIES:
            return {
                ...state,
                movies: action.payload,
            };
        case actions.ADD_TO_FAVOURITES:
            const newMovie = [...state.favourites, action.payload];
            window.localStorage.setItem("favourite",JSON.stringify(newMovie));
            return {
                ...state,
                favourite: newMovie,
            };
        case actions.REMOVE_FROM_FAVOURITES:
            const originalFav = state.favourite;
            const filteredFav = originalFav.filter((f) => f.id !== action.payload);
            return {
                ...state,
                favourite: filteredFav,
            };
        default:
            return state;
    }
}