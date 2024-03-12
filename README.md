# Express Products Server
Este proyecto implementa un servidor Express diseñado para gestionar consultas a un archivo de productos utilizando la clase ProductManager para la persistencia de datos. El servidor permite realizar consultas para obtener todos los productos o un producto específico por su ID.

Características
Consulta de productos: Endpoint para obtener una lista de todos los productos o una cantidad limitada especificada a través de un parámetro de consulta.
Consulta de producto por ID: Endpoint para obtener un producto específico utilizando su ID único.
Empezando
Estas instrucciones te guiarán para obtener una copia del proyecto en funcionamiento en tu máquina local con fines de desarrollo y pruebas.

Prerrequisitos
Necesitas tener instalado Node.js y npm en tu sistema para ejecutar este proyecto. Puedes descargarlos e instalarlos desde nodejs.org.

Instalación
Sigue estos pasos para iniciar el proyecto:

Clona el repositorio en tu máquina local:

bash
Copy code
git clone https://github.com/tu-usuario/tu-repositorio.git
Navega al directorio del proyecto:

bash
Copy code
cd tu-repositorio
Instala las dependencias necesarias:

Copy code
npm install
Inicia el servidor:

sql
Copy code
npm start
El servidor debería estar corriendo y accesible a través de http://localhost:3000.

Uso
Una vez que el servidor esté corriendo, podrás acceder a los siguientes endpoints:

Obtener productos: Accede a /products para obtener una lista de todos los productos. Opcionalmente, puedes añadir el parámetro de consulta ?limit=n para limitar el número de productos devueltos.

Obtener producto por ID: Accede a /products/:pid reemplazando :pid con el ID del producto que deseas consultar.
