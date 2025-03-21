Proyecto E-Commerce MERN

Este es un proyecto de una aplicación web de e-commerce desarrollada con el stack MERN (MongoDB, Express, React y Node.js). La aplicación permite a los usuarios navegar por un catálogo de productos, ver detalles, agregar productos a un carrito de compras y procesar pagos con Stripe.

-> Tecnologías Utilizadas:

1. Backend:

    - Node.js y Express.js para la lógica del servidor y API REST.
    - MongoDB Atlas como base de datos en la nube.
    - Cloudinary para el almacenamiento de imágenes.
    - Stripe como pasarela de pagos.

2. Frontend:

    - React.js con Vite para una experiencia de desarrollo rápida.
    - Axios para la comunicación con el backend.
    - React Router para la navegación.
    - Web components de MUI.

-> Instalación y Configuración:

1. Clonar el repositorio

git clone https://github.com/Baparedes/Proyecto7.git
cd Proyecto7

2. Configuración del Backend

cd backend
npm install

Crear un archivo .env en la carpeta backend con las siguientes variables de entorno:

- PORT=3000
- MONGO_URI=tu_conexion_mongo_atlas
- CLOUDINARY_CLOUD_NAME=tu_cloud_name
- CLOUDINARY_API_KEY=tu_api_key
- CLOUDINARY_API_SECRET=tu_api_secret
- STRIPE_SECRET_KEY=tu_stripe_secret_key
- JWT_SECRET=una_clave_secreta

Ejecutar el servidor:

npm run start

3. Configuración del Frontend

cd ../frontend
npm install

Crear un archivo .env en la carpeta frontend con:

- VITE_API_URL=http://localhost:3000
- VITE_STRIPE_PUBLIC_KEY=tu_stripe_public_key

Ejecutar el frontend:

npm run start

---> Características:

- Autenticación y autorización de usuarios.
- Gestión de productos con imágenes almacenadas en Cloudinary.
- Carrito de compras con integración de pagos mediante Stripe.
- CRUD para gestionar productos desde backend (Postman o ThunderClient).
- Diseño responsivo con React.

Contribución

Si deseas contribuir al proyecto, por favor, abre un issue o envía un pull request.

Licencia

Este proyecto está bajo la licencia MIT.

Saludos! :D