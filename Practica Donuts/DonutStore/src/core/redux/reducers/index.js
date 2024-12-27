import { combineReducers } from "redux";
import productReducer from "../../../components/Products/ProductsReducer";
import createProductReducer from "../../../components/CreateProducts/CreateProductsReducer";
import modifyReducer from "../../../components/ProductsDetails/ProductDetailsReducer";

const reducer = combineReducers({
  productReducer,
  createProductReducer,
  modifyReducer,
});

export default reducer;
