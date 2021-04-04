import { combineReducers } from '@reduxjs/toolkit'
import productReducer from '../views/BasePage/Product-page/redux/productRootReducer';




const rootReducer = combineReducers({
    // auth: authReducer
    products: productReducer
})


export default rootReducer;