import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../../contexts/users/UserContext';
import Button from '@mui/material/Button';
import { Paper, Typography, Box } from '@mui/material';

const Nosotros = () => {
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
      <Box
        sx={{
          mb: 2,
        }}
      >
        <img src="/logoNimbus.png" height={120} />
      </Box>
      <Typography
        sx={{
          mb: 3,
          color: 'white',
          textAlign: 'center',
        }}
      >
        Nimbus Technology es una empresa de servicios profesionales focalizada
        en proyectos de vistualización con tecnologías VMware, además provee los
        principales elementos que componen este tipo de proyectos, como
        soluciones de almacenamiento, backup & recovery, business continuity y
        soluciones de gestión eficientes de la plataforma.
        <Box
        sx={{
          m: 2
        }}
      >
        <img src="/colaboradores2.png" height={200} />
      </Box>
        Nuestros profesionales cuentan con una vasta experiencia obtenida en
        distintas empresas tecnológicas, tanto nacionales como internacionales.
        Esto nos permite contar con una destreza en la práctica en destacados
        proyectos tecnológicos en el ámbito local.
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
          onClick={() => navigate('/')}
          sx={{
            color: 'white',
            backdropFilter: 'blur(10px)',
            bgcolor: 'rgba(8, 26, 44, 0.57)',
          }}
        >
          Volver al Home
        </Button>
      )}
    </Paper>
  );
};

export default Nosotros;
