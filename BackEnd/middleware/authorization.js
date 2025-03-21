// Importación JWT para la creación del token
const jwt = require("jsonwebtoken");

// Creación del middleware de autorización
module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({
      msg: 'Acceso no autorizado'
    });
  }

  const parts = authHeader.split(' ');
  if (parts.length !== 2) {
    return res.status(401).json({
      msg: 'Formato de token inválido'
    });
  }

  const [scheme, token] = parts;
  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).json({
      msg: 'Tipo de token no válido'
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    req.user = decoded.user;
    next();
  } catch (error) {
    return res.status(401).json({
      msg: 'Token inválido o expirado',
      error: error.message
    });
  }
  // let { authorization } = req.headers;
  // console.log("este es req.headers", authorization);

  // if (!authorization) {
  //   res.status(401).json({ msg: "Acceso no autorizado 1" });
  // }

  // try {
  //   let [type, token] = authorization.split(" ");
  //   if (type === "Token" || type === "Bearer") {
  //     const openToken = jwt.verify(token, process.env.SECRET);
  //     req.user = openToken.user;
  //     console.log(openToken);

  //     next();
  //   } else {
  //     return res.status(401).json({ msg: "Acceso no autorizado 2" });
  //   }
  // } catch (error) {
  //   res.json({ msg: "Hubo un error", error });
  // }
};
