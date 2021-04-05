import { all } from 'redux-saga/effects'

import { watchGetAllProducts } from '../../Home/redux/getAllProductsRedux'
import { watchRemoveProduct } from '../../../../components/Product/redux/removeProductRedux'


export default function* watchRootProductSaga() {
    yield all([
        watchGetAllProducts(),
        watchRemoveProduct()
    ])
}