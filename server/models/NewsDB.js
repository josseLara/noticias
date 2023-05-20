import mysql from 'mysql2';

// datos db local
export const connectionDB = mysql.createConnection({
    host: 'localhost',
    user: 'root',//usuario_mysql
    password: '',//contraseña_mysql
    database: 'newsDB'//nombre_base_de_datos
});

// conexion con la db
connectionDB.connect((error) => {
    if (error) {
        console.error('Error al conectarse a la base de datos:', error);
    } else {
        console.log('Conexión exitosa a la base de datos');
    }
});
