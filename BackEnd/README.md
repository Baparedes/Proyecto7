API REST para e-commerce con Autenticación y Autorización

Descripción: API desarrollada para un sistema de e-commerce que ofrece equipos y servicios tecnológicos. Incluye funcionalidades como autenticación y autorización de usuarios y manejo de productos. Utiliza una base de datos en MongoDB Atlas y está desarrollada con Node.js y Express.js

Características principales: 
- Registro de usuarios basada en contraseña encriptada con bcryptjs
- Autenticación y autorización de usuarios con JSON Web Tokens (JWT)
- CRUD para productos (Hardware, software y Servicios profesionales)
- Base de datos alojada en MongoDB Atlas

Requisitos:
- Node.js v14 o superior
- MongoDB Atlas o una instancia local de MongoDB (Cambiando la URI en las variables de entorno)

Instalación:
1. Clona el repositorio (git clone https://github.com/Baparedes/Proyecto7.git)
2. Navega al directorio del proyecto (cd Proyecto7)
3. Instala las dependencias (npm install)
4. Crea un archivo .env y configura las variables de entorno:
    - PORT= Puerto donde correrá la aplicación
    - MONGODB_URI= URI de tu base de datos o de MongoDB Atlas
    - SECRET= Clave secreta para JWT
    - STRIPE_SECRET_KEY= Clave secreta de Stripe
    - FRONTEND_URL= http://localhost:5173
    - REACT_BASE_URL_S= http://localhost:5173/pago-exitoso
    - REACT_BASE_URL_C= http://localhost:5173/pago-fallido
    - CLOUDINARY_URL= cloudinary://<your_api_key>:<your_api_secret>
    - CLOUDINARY_CLOUD_NAME= Nombre de tu nube
    - CLOUDINARY_API_KEY= Clave de la api
    - CLOUDINARY_API_SECRET= Clave secreta
5. Inicia la aplicación (npm run start)

Endpoints Principales Usuarios:
- POST /api/user/registro
    - Body: { username, email, password }
- POST /api/user/iniciar-sesion
    - Body: { username, password }

Endpoints Principales Productos:
- GET /api/product/obtener-productos
- POST /api/product/crear-producto
    - Body: { nombre, descripcion, categoria, precio }

Tecnologías usadas:
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JSON Web Tokens (jsonwebtoken)
- Bcrypt.js
- Cors
- Dotenv
- Stripe
- Cloudinary

URL de la API en Render:
https://proyecto6-iptn.onrender.com