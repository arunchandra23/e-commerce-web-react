import { combineReducers } from "redux";
import setSearchTermReducer from "./setSearchTermReducer";
import setDataReducer from "./setDataReducer";
import setSelectedReducer from "./setSelectedReducer";
import addToCartReducer from './addToCartReducer'
import updateCategoryDataReducer from "./updateCategoryDataReducer";


export default combineReducers({
    searchTerm:setSearchTermReducer,
    data:setDataReducer,
    selectedItem: setSelectedReducer,
    cart: addToCartReducer,
    categoryData:updateCategoryDataReducer
});