import * as actions from "./ActionsTypes";

export const fetchMoviesAction = (movies) => {
    return {
        type: actions.FETCH_MOVIES,
        payload: movies,
    }
}

export const addFavouriteAction = (movies) => {
    return {
        type: actions.ADD_TO_FAVOURITES,
        payload: movies,
    }
}

export const RemoveFromFavouriteAction = (id) => {
    return {
        type: actions.REMOVE_FROM_FAVOURITES,
        payload: id,
    }
}