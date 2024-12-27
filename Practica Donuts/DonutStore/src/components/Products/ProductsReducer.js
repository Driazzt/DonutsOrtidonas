import { LOAD_PRODUCTS } from "./ProductsActions";
import { GET_PRODUCT_BY_ID } from "./ProductsActions";

const initialState = {
  products: undefined,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return {
        ...state,
        products: action.payload.products,
      };
    case GET_PRODUCT_BY_ID:
      return {
        ...state,
        product: action.payload.product,
      };
    default:
      return state;
  }
};

export default productReducer;
