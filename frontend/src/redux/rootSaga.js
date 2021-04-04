import {all} from 'redux-saga/effects'

import watchRootProductSaga from '../views/BasePage/Product-page/redux/productRootSaga'

export default function* rootSaga () {
    yield all([
        // watchAuth()
        watchRootProductSaga()
    ])
}