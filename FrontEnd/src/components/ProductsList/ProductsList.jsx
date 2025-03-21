import { useContext, useEffect } from 'react';
import ProductContext from '../../contexts/products/ProductContext';
import { useNavigate } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Grid2,
  CardActions,
  Box,
} from '@mui/material';

const ProductsList = () => {
  const navigate = useNavigate();
  const { products, getProducts } = useContext(ProductContext);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Box sx={{ padding: 5 }}>
      <Typography
        variant="h4"
        sx={{
          mb: 5,
          p: 3,
          textAlign: 'center',
          fontWeight: 'bold',
          borderRadius: 4,
          backdropFilter: 'blur(10px)',
          bgcolor: 'rgba(12, 38, 63, 0.36)',
        }}
      >
        Lista de productos y servicios
      </Typography>

      <Grid2 container spacing={3}>
        {products.map(product => (
          <Grid2 key={product._id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                minHeight: 360,
                maxWidth: 345,
                borderRadius: 2,
                boxShadow: 3,
              }}
            >
              <CardMedia
                component="img"
                height="180"
                image={product.imagen}
                alt={product.nombre}
                sx={{ objectFit: 'scale-down' }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {product.nombre}
                </Typography>
                <Typography variant="h6" color="primary">
                  US${product.precio}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  onClick={() => navigate(`/obtener-producto/${product._id}`)}
                >
                  Ver detalles
                </Button>
              </CardActions>
            </Card>
          </Grid2>
        ))}
      </Grid2>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          variant="contained"
          onClick={() => navigate('/')}
          sx={{
            mb: 0,
            marginTop: 2.5,
            backdropFilter: 'blur(10px)',
            bgcolor: 'rgba(12, 38, 63, 0.36)',
          }}
        >
          Volver al Home
        </Button>
      </Box>
    </Box>
  );
};

export default ProductsList;
