# Sequelize - NodeJS [BACK]

### Tecnologías

Sequelize - NodeJS [BACK] usa varios proyectos de código abierto para funcionar correctamente:

* [express](http://expressjs.com/) - Framework utilizado para el manejo de las rutas y middleware.

* [cors](https://www.npmjs.com/package/cors) - Middleware para habilitar opciones de conexión a la servidor (Su uso es opcional).
* [sequelize](hhttps://sequelize.org/master/) - ORM para uso de consultas y crear colecciones en MYSQL

* [nodemon](https://www.npmjs.com/package/nodemon) - Herramienta de desarrollo reinicia automáticamente la aplicación de node cuando se detectan cambios de archivos en el directorio.


### Instalación

Participant - NodeJS [BACK] requiere [Node.js](https://nodejs.org/) v10.4 + para ejecutarse.

Clonar Repositorio
```sh
$ git clone https://github.com/yoisert/api-employee.git
```

Levantar base de datos MYSQL
```sh
$ docker-compose up --build  
```

Instale las dependencias y devDependencies e inicie el servidor.
```sh
$ cd api-employee
$ npm install 
$ npm run start
```
Iniciar servidor con con [nodemon](https://www.npmjs.com/package/nodemon)
```sh
$ npm install nodemon -D 
$ npm run start-dev
```
Iniciar Pruebas
```sh
$ npm run test
```
Verifique la implementación navegando a la dirección de su servidor en su navegador preferido.
```sh
127.0.0.1:3000 || http://localhost:3000
```


Autor: Jose Ruiz Urango
----
**Software Libre!**
