export const LOAD_NEW_PRODUCT = "LOAD_NEW_PRODUCT";

export const loadCreateProduct = (payload) => {
  return {
    type: LOAD_NEW_PRODUCT,
    payload,
  };
};
