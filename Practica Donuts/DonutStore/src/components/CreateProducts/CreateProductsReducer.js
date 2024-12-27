import { LOAD_NEW_PRODUCT } from "./CreateProductsActions";

const initialState = {
  products: undefined,
};

const createProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_NEW_PRODUCT:
      return {
        ...state,
        products: action.payload.products,
      };
    default:
      return state;
  }
};

export default createProductReducer;
