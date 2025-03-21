const reducer = (globalState, action) => {
  switch(action.type) {
    case "OBTENER_PRODUCTOS":
      return {
        ...globalState,
        products: action.payload
      };

    case "OBTENER_PRODUCTOID":
      return {
        ...globalState,
        selectedProduct: action.payload
      };
    default:
      return globalState;
  }
};

export default reducer
