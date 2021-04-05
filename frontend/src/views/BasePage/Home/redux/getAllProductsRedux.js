import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { call, put, takeLatest, } from 'redux-saga/effects'


// ------------------------------- slice -------------------------------  
const initialState = {
    loading: null,
    error: null,
    success: null,
    products: null
}

export const getAllProductsSlice = createSlice({
    name: 'getAllProductsSlice',
    initialState,
    reducers: {
        getAllProductsSaga(state) {
            return { ...state, loading: true }
        },
        getAllProductsSuccess(state, action) {
            return { ...state, products: action.payload, success: true, loading: false, error: false }
        },
        getAllProductsError(state) {
            return { ...state, error: false, products: null, success: false, loading: false }
        },
        updateAllProductsAfterRemove(state, action) {
            const removedId = action.payload;
            const products = state.products.filter((product) => product._id != removedId)
            return { ...state, products, success: true, loading: false, error: false }
        },
    }
})

export const { getAllProductsError, getAllProductsSaga, getAllProductsSuccess, updateAllProductsAfterRemove } = getAllProductsSlice.actions


// ------------------------------- saga -------------------------------  

const getAllProductsApi = async () => {
    const { data } = await axios.get('/products/get-all-products')
    return data.products
}

function* getAllProducts(action) {
    try {
        const data = yield call(getAllProductsApi, action.payload)
        yield put(getAllProductsSuccess(data))
    } catch (error) {
        yield put(getAllProductsError(error))
    }
}

export function* watchGetAllProducts() {
    yield takeLatest(getAllProductsSaga.type, getAllProducts)
}