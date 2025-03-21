import { Box, Button, Card, Paper, Typography } from '@mui/material';
import { useContext, useEffect } from 'react';
import CartContext from '../../contexts/cart/CartContext';
import clienteAxios from '../../config/axios';

const Cart = () => {
  const { cart, getCart, removeFromCart, clearCart } = useContext(CartContext);

  useEffect(() => {
    getCart();
  }, []);

  const totalCompra = cart.products.reduce(
    (acc, item) => acc + item.product.precio * item.quantity,
    0,
  );

  const handleCheckout = async () => {
    try {
      const response = await clienteAxios.post(
        '/payments/checkout-session',
        {
          cart: cart.products, // Enviar productos del carrito al backend
        },
      );

      if (response.data.url) {
        window.location.href = response.data.url; // Redirigir a Stripe
      }
    } catch (error) {
      console.error('Error al iniciar pago:', error);
    }
  };

  return (
    <Box
      p={3}
      sx={{
        m: 7,
        p: 3,
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        backdropFilter: 'blur(10px)',
        bgcolor: 'rgba(12, 38, 63, 0.36)',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Carrito de Compras
      </Typography>

      {!cart || !cart.products || cart.products.length === 0 ? (
        <Typography variant="body1">Tu carrito está vacío.</Typography>
      ) : (
        cart.products.map(item => (
          <Card
            key={item._id}
            sx={{
              mb: 2,
              p: 2,
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Box display="flex" alignItems="center" gap={2}>
              {item.product?.imagen && (
                <img
                  src={item.product.imagen}
                  alt={item.product.nombre}
                  height="50"
                  style={{ borderRadius: '5px' }}
                />
              )}
              <Box>
                <Typography variant="h6">{item.product.nombre}</Typography>
                <Typography variant="body2">
                  Cantidad: {item.quantity}
                </Typography>
                <Typography variant="body2">
                  Precio total: US${item.product.precio * item.quantity}
                </Typography>
              </Box>
            </Box>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => removeFromCart(item.product._id)}
              sx={{ ml: 1 }}
            >
              Eliminar
            </Button>
          </Card>
        ))
      )}

      {cart.products.length > 0 && (
        <>
          <Box display="flex" alignItems="center" gap={2}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderRadius: 1,
              }}
              elevation={3}
            >
              <Typography variant="h6" sx={{ fontWeight: 'bold', mr: 1 }}>
                Total compra:
              </Typography>
              <Typography variant="h6">US${totalCompra}</Typography>
            </Paper>
          </Box>
          <Box display="flex" alignItems="center" gap={2}>
            <Button
              variant="contained"
              color="error"
              onClick={clearCart}
              sx={{ mt: 2 }}
            >
              Vaciar Carrito
            </Button>
            <Button
              variant="contained"
              color="success"
              sx={{ mt: 2 }}
              onClick={handleCheckout}
            >
              Ir a pagar
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
};

export default Cart;
