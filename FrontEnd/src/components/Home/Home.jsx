import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import ProductContext from '../../contexts/products/ProductContext';
import UserContext from '../../contexts/users/userContext';
import Button from '@mui/material/Button';
import { Paper, Typography } from '@mui/material';

const Home = () => {
  const navigate = useNavigate();
  const { getProducts } = useContext(ProductContext);
  const { user } = useContext(UserContext);

  const handleProductsList = () => {
    getProducts();
    navigate('/obtener-productos');
  };

  const handleProfile = () => {
    navigate('/perfil');
  };

  const token = localStorage.getItem('token');

  return (
    <Paper
      sx={{
        m: 10,
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
      <Typography
        variant="h3"
        sx={{ mb: 3, fontWeight: 'bold', color: 'white', textAlign: 'center'}}
      >
        Bienvenidos
      </Typography>
      {user && token ? (
        <Button
          variant="contained"
          color="primary"
          onClick={handleProfile}
          sx={{
            backdropFilter: 'blur(10px)',
            bgcolor: 'rgba(8, 26, 44, 0.57)',
          }}
        >
          Ir a mi perfil
        </Button>
      ) : (
        <Button
          variant="contained"
          color="primary"
          onClick={handleProductsList}
          sx={{
            backdropFilter: 'blur(10px)',
            bgcolor: 'rgba(8, 26, 44, 0.57)',
          }}
        >
          Ver lista de productos y servicios
        </Button>
      )}
    </Paper>
  );
};

export default Home;
