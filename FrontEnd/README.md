Frontend - E-commerce Web Application

Este repositorio contiene el frontend de una aplicación web de comercio electrónico construida con React, Vite, y Material-UI. 

Descripción:
La aplicación permite a los usuarios ver un catálogo de productos, agregar productos al carrito, eliminar productos del carrito, y realizar pagos a través de Stripe.

Funcionalidades:
- Ver listado de productos.
- Detalles de cada producto.
- Agregar y eliminar productos del carrito de compras.
- Realizar pagos utilizando Stripe.

Tecnologías:
    - React: Librería para la interfaz de usuario.
    - Vite: Herramienta de bundling rápido para aplicaciones modernas de JavaScript.
    - Material-UI: Componentes de interfaz de usuario (UI) para React.
    - Stripe: Plataforma de pago integrada para procesar pagos.
    - Axios: Cliente HTTP para la comunicación con el backend.

Instalación:
1. Clona este repositorio en tu máquina local:
https://github.com/Baparedes/Proyecto7.git

2. Navega al directorio del proyecto:
cd frontend-ecommerce

3. Instala las dependencias:
npm install

4. Desarrollo
Para iniciar el servidor de desarrollo:
npm run dev

Esto abrirá la aplicación en el navegador en la URL http://localhost:3000.

5. Variables de entorno:
Asegúrate de configurar las siguientes variables de entorno en un archivo .env:

- VITE_API_URL: La URL base del backend de la API (por ejemplo, http://localhost:5000/api).
- VITE_STRIPE_PUBLIC_KEY: Tu clave pública de Stripe para integrar los pagos.
- VITE_API_URL=http://localhost:5000/api

6. Build para Producción:
Para crear una versión optimizada de la aplicación para producción:

npm run build
El proyecto estará disponible en el directorio dist/.

7. Despliegue:
Este frontend está listo para ser desplegado en servicios como Netlify, Vercel o Railway. Para hacer el despliegue:

Realiza un build de producción con npm run build.
Conecta tu repositorio a un servicio de despliegue como Netlify o Vercel y sigue las instrucciones del servicio para subir los archivos del directorio dist/.

Contribuciones
Las contribuciones son bienvenidas. Si tienes alguna sugerencia o mejora, siéntete libre de abrir un issue o enviar un pull request.

Licencia
Distribuido bajo la licencia MIT. Ver LICENSE para más información.

Saludos! :D