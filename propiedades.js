import { connection } from "./server/models/NewsDB.js";

// obtener data propiedades 
const consulta = async (req, res, next, query, data) => {
    try {
        const results = await new Promise((resolve, reject) => {
            connection.query(query, data, (error, results, fields) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });

        req.results = results;
        next();
    } catch (err) {
        console.log(err);
        res.status(400).send("Error al obtener las propiedades");
    }
}

// obtener todos los datos  
export const getAllPropiedades = async (req, res, next) => {
    let querySql = "SELECT * FROM propiedades";
    await consulta(req, res, next, querySql)
};

// obtener por id 
export const getIdPropiedades = async (req, res, next) => {
    let querySql = `SELECT * FROM propiedades WHERE id=?`;
    await consulta(req, res, next, querySql, [req.params.id])

};

// agregar propiedad
export const addPropiedad = async (req, res, next) => {
    let { ubicacion, tipo, precio, habitaciones } = req.body;
    let data = [ubicacion, tipo, precio, habitaciones];
    let querySql = `INSERT INTO propiedades (id, ubicacion, tipo, precio, habitaciones) VALUES (NULL, ?, ?,  ?,  ?)`;
    await consulta(req, res, next, querySql, data)
}

// editar propiedad
export const patchPropiedad = async (req, res, next) => {
    let { ubicacion, tipo, precio, habitaciones } = req.body;
    let data = [ubicacion, tipo, precio, habitaciones,req.params.id]
    let querySql = `UPDATE propiedades SET  ubicacion=?, tipo=?, precio=?, habitaciones =? WHERE propiedades.id = ?`;
    await consulta(req, res, next, querySql,data)
}

// eliminar propiedad
export const deletePropiedad = async (req, res, next) => {
    let querySql = `DELETE FROM propiedades WHERE propiedades.id = ?`;
    await consulta(req, res, next, querySql,[req.params.id])
}


// cerrar la conexion
export const closedConnect = () => {
    connection.end((error) => {
        if (error) {
            console.error('Error al cerrar la conexión a la base de datos:', error);
        } else {
            console.log('Conexión a la base de datos cerrada');
        }
    });

}