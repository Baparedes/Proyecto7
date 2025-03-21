import { useContext, useEffect, useState } from 'react';
import ProductContext from '../../contexts/products/ProductContext';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  Snackbar,
  Alert,
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import UserContext from '../../contexts/users/userContext';
import CartContext from '../../contexts/cart/CartContext';

const ProductDetail = () => {
  const { getProductById, selectedProduct } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (id) {
      getProductById(id);
    }
  }, []);

  const [open, setOpen] = useState(false);

  const handleUser = () => {
    navigate('/registro');
  };

  const handleAddToCart = () => {
    addToCart(selectedProduct._id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const token = localStorage.getItem('token');

  if (!selectedProduct) return <p>Cargando producto...</p>;

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{
        mb: 0.5,
      }}
    >
      <Card sx={{ m: 2, maxWidth: 400, p: 2, boxShadow: 3 }}>
        <CardMedia
          component="img"
          height="250"
          image={selectedProduct.imagen}
          alt={selectedProduct.nombre}
          sx={{ objectFit: 'scale-down', borderRadius: 2 }}
        />
        <CardContent>
          <Typography variant="h5" component="div" gutterBottom>
            {selectedProduct.nombre}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {selectedProduct.descripcion}
          </Typography>
          <Typography
            variant="body2"
            color="primary"
            sx={{ mt: 1, fontWeight: 'bold' }}
          >
            Categoría: {selectedProduct.categoria}
          </Typography>
          <Typography variant="h6" sx={{ mt: 2 }}>
            Precio: US${selectedProduct.precio}
          </Typography>
          {user && token ? (
            <>
              <Button
                variant="contained"
                color="primary"
                sx={{ mt: 2, width: '100%' }}
                onClick={handleAddToCart}
              >
                Agregar al carrito
              </Button>
              <Snackbar
                open={open}
                autoHideDuration={2000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              >
                <Alert
                  onClose={handleClose}
                  severity="success"
                  sx={{ width: '100%' }}
                >
                  Producto agregado al carrito
                </Alert>
              </Snackbar>
            </>
          ) : (
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2, width: '100%' }}
              onClick={handleUser}
            >
              Registrarme
            </Button>
          )}
        </CardContent>
        <Box display="flex" justifyContent="center" mt={1} mb={1}>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => navigate('/obtener-productos')}
          >
            Volver al catálogo
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default ProductDetail;
