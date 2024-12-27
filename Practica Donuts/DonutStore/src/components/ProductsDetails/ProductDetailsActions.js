export const MODIFY_PRODUCTS_ACTION = "MODIFY_PRODUCTS_ACTION";

export const modifyProductsAction = (payload) => {
  return {
    type: MODIFY_PRODUCTS_ACTION,
    payload,
  };
};
