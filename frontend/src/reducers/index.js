import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import itemReducer from "./itemReducers";
import {forgotPasswordReducer, signInReducer,signUpReducer, resetPasswordReducer} from './authReducer'
import { addressReducer } from "./addressReducer";
import { orderReducer,orderDetail, searchItems } from "./odersReducer";
import { sidebarReducer } from "./sidebarreducer";
import productReducer from "./productsReducer";
export default combineReducers({
    allProducts:productReducer,
    allItems:itemReducer,
    cart:cartReducer,
    user:signInReducer,
    userRegister:signUpReducer,
    address:addressReducer,
    order:orderReducer,
    orderDetails:orderDetail,
    search:searchItems,
    sidebar:sidebarReducer,
    forgotPasswordlink: forgotPasswordReducer,
    resetUserPassword: resetPasswordReducer
})