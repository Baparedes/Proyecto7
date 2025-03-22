import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../../contexts/users/UserContext';
import Button from '@mui/material/Button';
import { Paper, Typography } from '@mui/material';

const Contacto = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const handleProfile = () => {
    navigate('/perfil');
  };

  const token = localStorage.getItem('token');

  return (
      <Paper
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
        <Typography
          variant="h3"
          sx={{ mb: 3, fontWeight: 'bold', color: 'white' }}
        >
          Contáctanos
        </Typography>
        <Typography
          sx={{
            mb: 3,
            color: 'white',
            textAlign: 'center',
          }}
        >
          Nimbus Technology Limitada
          <br />
          Barros Borgoño 110, Oficina 809
          <br />
          Providencia
          <br />
          Santiago, Chile
          <br />
          Fono: +56 2 2276 6181
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
          onClick={() => navigate('/')}
          sx={{
            backdropFilter: 'blur(10px)',
            bgcolor: 'rgba(8, 26, 44, 0.45)',
          }}
        >
          Volver al Home
        </Button>
      )}
    </Paper>
  );
};

export default Contacto;
