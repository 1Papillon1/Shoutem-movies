import {configureStore} from '@reduxjs/toolkit'
import allReducers from './allReducers';



const configurationAppStore = () => {
    const store = configureStore({
        reducer: allReducers
    })
    sagaMiddleware.run(rootSaga);
    return store
}
export default configurationAppStore