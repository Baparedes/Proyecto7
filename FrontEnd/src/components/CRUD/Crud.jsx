import { useContext, useEffect, useState } from 'react';
import ProductContext from '../../contexts/products/ProductContext';

const Crud = () => {
  const [product, setProduct] = useState({
    nombre: '',
    descripcion: '',
    categoria: '',
    precio: '',
    imagen: ''
  });

  const [editMode, setEditMode] = useState(false);
  const [id, setId] = useState(null);
  const [error, setError] = useState(null);

  const ctx = useContext(ProductContext);
  const { products, createProduct, getProducts, updateProduct, deleteProduct } =
    ctx;

  useEffect(() => {
    getProducts();
  }, []);

  const handleChange = event => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    });
  };

  const sendDataToCreateProduct = event => {
    event.preventDefault();
    if (
      !product.nombre.trim() ||
      !product.descripcion.trim() ||
      !product.categoria.trim() ||
      (typeof product.precio === 'string' && !product.precio.trim()) ||
      (typeof product.precio === 'number' && product.precio <= 0) ||
      !product.imagen.trim()
    ) {
      return setError(
        'Se deben llenar todos los campos de texto y el precio debe ser válido',
      );
    }
    createProduct(product);
    setError(null);
  };

  const sendDataToUpdateProduct = event => {
    event.preventDefault();
    if (
      !product.nombre.trim() ||
      !product.descripcion.trim() ||
      !product.categoria.trim() ||
      (typeof product.precio === 'string' && !product.precio.trim()) ||
      (typeof product.precio === 'number' && product.precio <= 0) ||
      !product.imagen.trim()
    ) {
      return setError(
        'Se deben llenar todos los campos de texto y el precio debe ser válido',
      );
    }
    updateProduct(id, product);
    setId(null);
    setProduct({
      nombre: '',
      descripcion: '',
      categoria: '',
      precio: '',
      imagen: ''
    });
    setEditMode(false);
    setError(null);
  };

  const sendDataToDeleteProduct = id => {
    deleteProduct(id);
  };

  const activateEditMode = product => {
    setEditMode(true);
    setId(product._id);
    setProduct({
      nombre: product.nombre,
      descripcion: product.descripcion,
      categoria: product.categoria,
      precio: product.precio,
      imagen: product.imagen
    });
  };

  return (
    <div>
      <h1>{editMode ? 'Editar producto' : 'Crear producto'}</h1>
      <form
        onSubmit={
          editMode
            ? e => {
                sendDataToUpdateProduct(e);
              }
            : e => {
                sendDataToCreateProduct(e);
              }
        }
      >
        <h2>Nombre del producto</h2>
        <input
          name="nombre"
          onChange={e => handleChange(e)}
          value={product.nombre}
        />
        <h2>Descripción del producto</h2>
        <input
          name="descripcion"
          onChange={e => handleChange(e)}
          value={product.descripcion}
        />
        <h2>Categoría del producto</h2>
        <input
          name="categoria"
          onChange={e => handleChange(e)}
          value={product.categoria}
        />
        <h2>Precio del producto</h2>
        <input
          name="precio"
          onChange={e => handleChange(e)}
          value={product.precio}
        />
        <h2>Imagen del producto</h2>
        <input
          name="imagen"
          onChange={e => handleChange(e)}
          value={product.imagen}
        />
        <button type="submit">
          {editMode ? 'Editar producto' : 'Crear producto'}
        </button>
      </form>
      {error ? error : null}
      <h1>Lista de productos y servicios</h1>
      {products.map(product => {
        return (
          <div key={product._id}>
            <h2>{product.nombre}</h2>
            <img src={product.imagen} alt={product.nombre} style={{ height: '100px' }} />
            <p>Descripción: {product.descripcion}</p>
            <p>Categoría: {product.categoria}</p>
            <p>Precio: US${product.precio}</p>
            <button onClick={event => activateEditMode(product)}>Editar</button>
            <button onClick={event => sendDataToDeleteProduct(product._id)}>
              Borrar
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Crud;