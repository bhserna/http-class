# Get HTML through HTTP

## Ejemplo

Usar express para "servir" la página de `01-basic-html`.

Pasos:

1. Iniciar yarn `yarn init`.
2. Instalar express `yarn add express`.
3. Instalar ejs `yarn add ejs`.
4. Correr Hello World de express - http://expressjs.com/en/starter/hello-world.html
5. Configurar "templating engine" y carpeta de "views" - http://expressjs.com/en/guide/using-template-engines.html
6. Configurar carpeta the archivos estáticos - http://expressjs.com/en/starter/static-files.html
7. Mover archivos de HTML y CSS a los lugares correctos.
7. Mover archivos de imágenes.
8. Corregir "paths" para archivos estáticos en el documento de HTML.
9. Hacer render del HTML en el path en "GET /"
10. Iniciar el servidor `node index.js`
11. Instalar nodemon `yarn add nodemon`
12. Agregar script para iniciar servidor con nodemon usando `yarn run start`

Un poco de teoría y análisis:

* https://developer.mozilla.org/es/docs/Web/HTTP/Overview
* Chrome inspector.


## Ejercicio

Usar express para "servir" la página de `02-html-tables`.

Requisitos:

1. Usar como punto de entrada o "main" `app.js` en lugar de `index.js`
2. Cambiar el nombre del template de `index.ejs` a `moviex.ejs`
3. Hacer `console.log("Rendering Moviex Home")` en cada llamada a `GET /`





## Más información:

* https://yarnpkg.com/es-ES/docs/cli/run
* http://expressjs.com/
