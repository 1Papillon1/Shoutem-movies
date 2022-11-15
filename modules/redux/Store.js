import { allReducers } from "./allReducers";
import {configureStore} from "@reduxjs/toolkit";

const Store = () => {
    const store = configureStore({
        reducer: allReducers
    })
    return store;
}

export default Store;