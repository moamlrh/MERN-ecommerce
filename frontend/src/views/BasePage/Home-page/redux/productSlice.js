import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading: null,
    error: null,
    success: null
}

const productsSlice = createSlice({
    name: 'productsSlice',
    initialState,
    reducers: {
        getAllProductsSaga(state) {
            return { ...state, loading: true }
        },
        getAllProductsSuccess(state, action) {
            return { ...state, success: true, loading: false, error: false }
        },
        getAllProductsError(state) {
            return { ...state, error: false, success: false, loading: false }
        },

    }
})

export const { getAllProductsError, getAllProductsSaga, getAllProductsSuccess } = productsSlice.actions
export default productsSlice.reducer;