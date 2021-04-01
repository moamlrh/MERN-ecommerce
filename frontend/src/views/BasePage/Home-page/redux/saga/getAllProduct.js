import { call, put, takeLatest, } from 'redux-saga/effects'
import { getAllProductsSaga } from '../productSlice'

const getAllProductsApi = async () => {
    const {data } = await axios.get('/products/get-all-products')
}

function* getAllProducts(action) {
    try {
        const data = yield call(getAllProductsApi, action.payload)
    } catch (error) {

    }
}

export default function* watchGetAllProducts() {
    yield takeLatest(getAllProductsSaga.type, getAllProducts)
}