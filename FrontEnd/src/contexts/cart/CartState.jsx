import { useContext, useEffect, useReducer } from "react";
import PropTypes from 'prop-types';
import CartReducer from "./CartReducer";
import CartContext from "./CartContext";
import AuthContext from "../users/userContext";
import axiosClient from '../../config/axios';

const CartState = props => {
  const initialState = {
    cart: { products: [] },
  };

  const [globalState, dispatch] = useReducer(CartReducer, initialState);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      getCart();
    }
  },);

  const getCart = async (cart) => {
    if(!cart) return;

    try {
      const res = await axiosClient.get('/cart', {
        headers: {
          Authorization: user.token || `Bearer ${localStorage.getItem('token')}`,
        },
      });

      dispatch({ type: 'OBTENER_CARRITO', payload: res.data });
    } catch (error) {
      console.error('Error al obtener el carrito:', error);
    }
  };

  const addToCart = async (productId, quantity = 1) => {
    if (!user) return;

    console.log("Agregando al carrito:", { productId, quantity });

    try {
      const res = await axiosClient.post(
        '/cart',
        { productId, quantity },
        {
          headers: {
            Authorization: user.token || `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );
      console.log("Respuesta de la API (carrito):", res.data);
      
      dispatch({ type: 'AGREGAR_A_CARRITO', payload: res.data });
    } catch (error) {
      console.log('Error al agregar al carrito:', error);
    }
  };

  const removeFromCart = async (productId) => {
    try {
      await axiosClient.delete(`/cart/${productId}`, {
        headers: {
          Authorization: user.token || `Bearer ${localStorage.getItem('token')}`,
        },
      });

      dispatch({ type: 'ELIMINAR_DEL_CARRITO', payload: productId });
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
    }
  };

  const clearCart = async () => {
    try {
      await axiosClient.delete('/cart', {
        headers: {
          Authorization: user.token || `Bearer ${localStorage.getItem('token')}`,
        },
      });

      dispatch({ type: 'VACIAR_CARRITO' });
    } catch (error) {
      console.error('Error al vaciar el carrito:', error);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart: globalState.cart,
        getCart,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

CartState.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartState;