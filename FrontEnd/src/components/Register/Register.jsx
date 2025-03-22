import { useContext, useEffect, useState } from 'react';
import UserContext from '../../contexts/users/UserContext';
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

const Register = () => {
  const userCtx = useContext(UserContext);
  const { registerUser, authStatus, verifyToken } = userCtx;
  const navigate = useNavigate();

  const [data, setData] = useState({
    username: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    verifyToken();

    if (authStatus) {
      navigate('/perfil');
    }
  }, [navigate, verifyToken, authStatus]);

  if (authStatus) return null;

  const handleChange = event => {
    event.preventDefault();
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const sendData = event => {
    event.preventDefault();
    registerUser(data);
  };

  return (
    <Container maxWidth="sm">
      <Card sx={{ mt: 2, mb: -3, p: 3, boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h4" align="center" gutterBottom>
            Crear Cuenta
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
                label="Email"
                variant="outlined"
                name="email"
                type="email"
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
                Registrarme
              </Button>
            </Stack>
          </Box>
        </CardContent>
      </Card>
    </Container>
    // <>
    //   <div>
    //     <div>
    //       <h2>Crear cuenta</h2>
    //     </div>

    //     <div>
    //       <div>
    //         <form
    //           onSubmit={e => {
    //             sendData(e);
    //           }}
    //         >
    //           <div>
    //             <label htmlFor="username">Nombre de usuario</label>
    //             <div>
    //               <input
    //                 id="username"
    //                 name="username"
    //                 type="text"
    //                 required
    //                 onChange={e => {
    //                   handleChange(e);
    //                 }}
    //               />
    //             </div>
    //           </div>

    //           <div>
    //             <label htmlFor="email">Email</label>
    //             <div>
    //               <input
    //                 id="email"
    //                 name="email"
    //                 type="email"
    //                 autoComplete="email"
    //                 required
    //                 onChange={e => {
    //                   handleChange(e);
    //                 }}
    //               />
    //             </div>
    //           </div>

    //           <div>
    //             <label htmlFor="password">Password</label>
    //             <div>
    //               <input
    //                 id="password"
    //                 name="password"
    //                 type="password"
    //                 required
    //                 onChange={e => {
    //                   handleChange(e);
    //                 }}
    //               />
    //             </div>
    //           </div>
    //           <div>
    //             <button type="submit">Registrarme</button>
    //           </div>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
};

export default Register;
