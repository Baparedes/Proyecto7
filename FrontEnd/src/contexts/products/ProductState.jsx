import PropTypes from 'prop-types';
import { useReducer } from 'react';
import ProductContext from './ProductContext';
import ProductReducer from './ProductReducer';
import axiosClient from '../../config/axios';

const ProductState = props => {
  const initialState = {
    products: [],
    selectedProduct: null
  };

  const [globalState, dispatch] = useReducer(ProductReducer, initialState);

  const createProduct = async formData => {
    const form = {
      nombre: formData.nombre,
      descripcion: formData.descripcion,
      categoria: formData.categoria,
      precio: formData.precio,
      imagen: formData.imagen
    };
    try {
      await axiosClient.post('/product/crear-producto', form);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };

  const getProducts = async () => {
    try {
      const res = await axiosClient.get('/product/obtener-productos');
      dispatch({
        type: 'OBTENER_PRODUCTOS',
        payload: res.data.Productos,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getProductById = async id => {
    try {
      const res = await axiosClient.get(`/product/obtener-producto/${id}`);
      console.log(res.data);
      dispatch({
        type: 'OBTENER_PRODUCTOID',
        payload: res.data.Producto,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const updateProduct = async (id, formData) => {
    const form = {
      nombre: formData.nombre,
      descripcion: formData.descripcion,
      categoria: formData.categoria,
      precio: formData.precio,
      imagen: formData.imagen
    };
    try {
      await axiosClient.put(`/product/actualizar-producto/${id}`, form);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async id => {
    try {
      await axiosClient.delete(`/product/eliminar-producto/${id}`);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products: globalState.products,
        selectedProduct: globalState.selectedProduct,
        getProducts,
        getProductById,
        createProduct,
        updateProduct,
        deleteProduct,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

ProductState.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProductState;
