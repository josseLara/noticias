# Inmobiliaria-API
Una api sencilla creada con  node.js || express || mysql

```JS


// solicitudes http || ./router
propiedadesRouter.get('/',getAllPropiedadesController,getPropiedad);
propiedadesRouter.get('/:id') = EgetIdPropiedadesController,getPropiedad);
propiedadesRouter.post('/agregar',getAddSolvedController);
propiedadesRouter.patch('/:id',patchPropiedadController);: 
propiedadesRouter.delete('/:id',deletePropiedadController);

```

* '/' = Esta solicitud HTTP obtiene todas las propiedades mediante el uso del controlador getAllPropiedadesController. Luego, la solicitud envía una respuesta utilizando el controlador getPropiedad.

* get('/:id') = Esta solicitud HTTP obtiene una propiedad específica mediante el uso del controlador getIdPropiedadesController. Luego, la solicitud envía una respuesta utilizando el controlador getPropiedad.

* '/agregar' = Esta solicitud HTTP agrega una nueva propiedad utilizando el controlador getAddSolvedController.

* patch('/:id') = Esta solicitud HTTP actualiza una propiedad existente mediante el uso del controlador patchPropiedadController.

* delete('/:id') = Esta solicitud HTTP elimina una propiedad existente mediante el uso del controlador deletePropiedadController.

# DB || models/db.js
```JS
export const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',//usuario_mysql
    password: '',//contraseña_mysql
    database: 'inmobiliarias'//nombre_base_de_datos
});

// conexion con la db
connection.connect((error) => {
    if (error) {
        console.error('Error al conectarse a la base de datos:', error);
    } else {
        console.log('Conexión exitosa a la base de datos');
    }
});
```

* Este código establece una conexión a una base de datos local MySQL. Utiliza la biblioteca "mysql" de JavaScript para crear una conexión con los detalles de la base de datos, como la dirección del servidor, el usuario, la contraseña y el nombre de la base de datos.

* La primera sección define la información de la base de datos local. Se establece una conexión con la base de datos MySQL usando los detalles definidos en el objeto "connection". Esto incluye el nombre de host, el usuario, la contraseña y el nombre de la base de datos.

* La segunda sección establece la conexión a la base de datos utilizando la función "connect" proporcionada por la biblioteca MySQL. Si la conexión es exitosa, se imprimirá un mensaje de éxito en la consola; de lo contrario, se imprimirá un mensaje de error.
