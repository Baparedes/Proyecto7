import { Button, Paper, Typography } from "@mui/material"
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/users/userContext";
import ProductContext from "../../contexts/products/ProductContext";

const Success = () => {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const token = localStorage.getItem('token');
    const { getProducts } = useContext(ProductContext);

    const handleProductsList = () => {
        getProducts();
        navigate('/obtener-productos');
      };

    const handleProfile = () => {
        navigate('/perfil');
      };

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
      bgcolor: 'rgba(0, 43, 86, 0.61)',
    }}
  >
    <Typography
      variant="h3"
      sx={{ mb: 3, fontWeight: 'bold', color: 'white', textAlign: 'center'}}
    >
      ¡Gracias por tu compra!
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
        Seguir comprando
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
  )
}

export default Success