import { MODIFY_PRODUCTS_ACTION } from "./ProductDetailsActions";

const initialState = {
  products: undefined,
};

const modifyReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODIFY_PRODUCTS_ACTION:
      return {
        ...state,
        product: action.payload.product,
      };
    default:
      return state;
  }
};

export default modifyReducer;
