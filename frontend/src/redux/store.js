import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './rootReducer'
import rootSaga from './rootSaga'

const SagaMiddleware = createSagaMiddleware() 

const store = configureStore({
    reducer:rootReducer,
    middleware:[...getDefaultMiddleware({thunk: false, }), SagaMiddleware]
})

SagaMiddleware.run(rootSaga)

export default store;