const cartReducer = (globalState, action) => {
  switch (action.type) {
    case 'OBTENER_CARRITO':
      return {
        ...globalState,
        cart: action.payload,
      };

    case 'AGREGAR_A_CARRITO': {
      return {
        ...globalState,
        cart: action.payload,
      };
    }

    case 'ELIMINAR_DEL_CARRITO':
      return {
        ...globalState,
        cart: {
          ...globalState.cart,
          products: globalState.cart.products.filter(
            item => item.product._id !== action.payload,
          ),
        },
      };

    case 'VACIAR_CARRITO':
      return {
        ...globalState,
        cart: { products: [] },
      };

    default:
      return globalState;
  }
};

export default cartReducer;
