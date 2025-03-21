// Importación de librerías y del modelo Usuario
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/Usuario");

// Creación de usuario
exports.createUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const createdUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    const payload = { user: { id: createdUser.id } };
    jwt.sign(
      payload,
      process.env.SECRET,
      {
        expiresIn: 3600000,
      },
      (error, token) => {
        if (error) throw error;
        res.json({ token, user: createdUser });
      }
    );
  } catch (error) {
    return res.status(400).json({ msg: error });
  }
};

// Inicio de sesión
exports.userSignIn = async (req, res) => {
  const { username, password } = req.body;
  try {
    let foundUser = await User.findOne({ username });
    if (!foundUser) {
      return res.status(400).json({ msg: "El username no existe" });
    }
    const correctPassword = await bcryptjs.compare(
      password,
      foundUser.password
    );
    if (!correctPassword) {
      return res
        .status(400)
        .json({ msg: "El username o la contraseña no corresponde" });
    }

    const payload = { user: { id: foundUser.id } };

    jwt.sign(
      payload,
      process.env.SECRET,
      {
        expiresIn: 3600000,
      },
      (error, token) => {
        if (error) throw error;
        res.json({ token });
      }
    );
  } catch (error) {
    res.json({ msg: "Hubo un error", error });
  }
};

// Verificación de usuario
exports.checkUser = async (req, res) => {
  try {
    
    const user = await User.findById(req.user.id).select("-password");
    res.json({ user });
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Hubo un error al verificar el usuario", error });
  }
};

// Actualización de usuario por su id
exports.updateUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, email } = req.body;
    const userUpdated = await User.findByIdAndUpdate(
      id,
      { username, email },
      { new: true }
    ).select("-password");
    res.json({ userUpdated });
  } catch (error) {
    res.status(500).json({ message: "Hubo un error al actualizar el usuario" });
  }
};
