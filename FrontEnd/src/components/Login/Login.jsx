import { useContext, useEffect, useState } from 'react';
import UserContext from '../../contexts/users/userContext';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Box,
  Stack,
} from '@mui/material';

const Login = () => {
  const navigate = useNavigate();
  const userCtx = useContext(UserContext);
  const { loginUser, authStatus, verifyToken } = userCtx;

  const [data, setData] = useState({
    username: '',
    password: '',
  });

  useEffect(() => {
    verifyToken();

    if (authStatus) {
      navigate('/perfil');
    }
  }, [navigate, authStatus, verifyToken]);

  if (authStatus) return null;

  const handleChange = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const sendData = event => {
    event.preventDefault();
    loginUser(data);
  };
  return (
    <Container maxWidth="sm">
      <Card sx={{ mt: 5, mb: -3, p: 3, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h4" align="center" gutterBottom>
            Iniciar Sesión
          </Typography>
          <Box component="form" onSubmit={sendData}>
            <Stack spacing={2}>
              <TextField
                label="Nombre de usuario"
                variant="outlined"
                name="username"
                fullWidth
                required
                onChange={handleChange}
              />
              <TextField
                label="Contraseña"
                variant="outlined"
                name="password"
                type="password"
                fullWidth
                required
                onChange={handleChange}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
              >
                Iniciar sesión
              </Button>
            </Stack>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Login;
