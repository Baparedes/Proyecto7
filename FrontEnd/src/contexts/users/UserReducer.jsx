const userReducer = (globalState, action) => {
  switch (action.type) {
    case 'REGISTRO_EXITOSO':
    case 'LOGIN_EXITOSO':
      localStorage.setItem('token', action.payload);

      return {
        ...globalState,
        authStatus: true,
      };

    case 'OBTENER_USUARIO':
      return {
        ...globalState,
        authStatus: true,
        user: action.payload,
      };

    case 'CERRAR_SESION':
      return {
        ...globalState,
        user: null,
        authStatus: null,
        loading: false,
      };

    case 'ELIMINAR_CUENTA':
      return {
        ...globalState,
        user: undefined,
      }

    default:
      return globalState;
  }
};

export default userReducer;
