const mysql = require('mysql');

connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mantenimiento',
    port: '3300'
});

let marcaModel = {};

marcaModel.getMarcas = (callback) => {
    if(connection){
        connection.query("SELECT * FROM marca;",
            //callback
            (err, rows) =>{
                if(err){
                    throw err;
                }else{
                    callback(null,rows);
                }
            }
        );

    }
};

module.exports = marcaModel;