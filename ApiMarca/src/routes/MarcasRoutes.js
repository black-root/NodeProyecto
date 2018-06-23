const Marca = require('../models/Marca');

module.exports = function (app) {
    //Que ejecute la ruta inicial del servidor
    app.get('/', (req, res) =>{
        Marca.getMarcas((err, data) => {
            //json por defecto devuelve un estado 200
            res.status(200).json(data);
        });

    })
}