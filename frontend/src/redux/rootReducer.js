import { combineReducers } from '@reduxjs/toolkit'
import productReducer from '../views/BasePage/Product/redux/productRootReducer';



const rootReducer = combineReducers({
    // auth: authReducer
    products: productReducer
})


export default rootReducer;