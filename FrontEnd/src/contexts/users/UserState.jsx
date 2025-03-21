import { useReducer } from 'react';
import axiosClient from '../../config/axios';
import UserContext from './userContext';
import PropTypes from 'prop-types';
import userReducer from './UserReducer';

const UserState = props => {
  const initialState = {
    user: {
      username: null,
      email: null,
    },
    authStatus: false,
    loading: true,
  };

  const [globalState, dispatch] = useReducer(userReducer, initialState);

  const registerUser = async formData => {
    try {
      const res = await axiosClient.post('/user/registro', formData);
      console.log('respuesta del registro', res);
      const token = res.data.token;
      dispatch({
        type: 'REGISTRO_EXITOSO',
        payload: token,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const loginUser = async formData => {
    try {
      const res = await axiosClient.post('/user/iniciar-sesion', formData);
      console.log('respuesta del login', res);
      const token = res.data.token;
      dispatch({
        type: 'LOGIN_EXITOSO',
        payload: token,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const verifyToken = async () => {
    const token = localStorage.getItem('token');

    if (token) {
      axiosClient.defaults.headers.common['authorization'] = 'Bearer ' + token;
    } else {
      delete axiosClient.defaults.headers.common['authorization'];
    }
    try {
      const res = await axiosClient.get('/user/verificar-usuario');
      console.log('respuesta de la verificación de usuario: ', res);
      dispatch({
        type: 'OBTENER_USUARIO',
        payload: res.data.user,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const logoutUser = () => {
    localStorage.removeItem('token');
    dispatch({
      type: 'CERRAR_SESION',
    });
  };

  return (
    <UserContext.Provider
      value={{
        user: globalState.user,
        authStatus: globalState.authStatus,
        loading: globalState.loading,
        registerUser,
        loginUser,
        verifyToken,
        logoutUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

UserState.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserState;
