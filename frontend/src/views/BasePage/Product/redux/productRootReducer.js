import { combineReducers } from '@reduxjs/toolkit'

import { getAllProductsSlice } from '../../Home/redux/getAllProductsRedux'
import { removeProductSlice } from '../../../../components/Product/redux/removeProductRedux'


const productReducer = combineReducers({
    getAllProductsStore: getAllProductsSlice.reducer,
    removeProductStore: removeProductSlice.reducer
})


export default productReducer