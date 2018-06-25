var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());



const mysql = require('mysql');

//crear conexion
const db = mysql.createConnection({
    host: '172.25.0.28',
    user: 'root',
    password: 'root',
    database: 'mantenimiento',
    port: '3306'

});



//Conectar
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log("Mysql Conectado...");
});


app.get('/createdb',(req, res) =>{
    let sql = 'CREATE DATABASE mantenimiento2';
    db.query(sql, (err, result) =>{
        if(err) throw err;
        console.log(result);
        res.send('Database created...');
    });
});

app.get('/marcas', (req, res) => {
   let sql = 'SELECT * FROM marca';
   let query = db.query(sql, (err, results) => {
       if(err) throw err;
       //console.log(results);
       res.status(200).json(results);
   });
});
//select by id
app.get("/marcas/:id", (req, res) => {
    let sql = `SELECT * FROM marca WHERE idMarca = ${req.params.id} `;
    let query = db.query(sql, (err, results) => {
        if (err) throw err;
        //console.log(results);
        res.status(200).json(results);
    });
});

app.post('/marcas', (req, res) => {
    //console.log(req.body);
    const marcaData = {
        idMarca: null,
        nombreMarca: req.body.nombreMarca,
        descripcion: req.body.descripcion,
        email: req.body.email,
        telefono: req.body.telefono,
        website: req.body.website,
        direccion: req.body.direccion
    }

    let sql = `INSERT INTO marca SET ? `;
    let query = db.query(sql, marcaData, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.json({
            success: true,
            msg: 'Marca Insertada',
            data: marcaData
        });
    });


});

/*
app.put('/marcas/:id', (req, res) =>{
console.log(req.body);
    const marcaData = {
        idMarca: null,
        nombreMarca: req.body.nombreMarca,
        descripcion: req.body.descripcion,
        email: req.body.email,
        telefono: req.body.telefono,
        website: req.body.website,
        direccion: req.body.direccion
    }


    let sql = `UPDATE marca SET 
     idMarca = ${marcaData.idMarca},
     nombreMarca = '${marcaData.nombreMarca}',
     descripcion = '${marcaData.descripcion}',
     email = '${marcaData.email}',
     telefono = '${marcaData.telefono}',
     website = '${marcaData.website}',
     direccion = '${marcaData.direccion}'
     WHERE idMarca = ${req.params.id}`;


    let query = db.query(sql, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.json({
            success: true,
            msg: 'Marca actualizada',
            data: marcaData
        });
    });
});
*/

app.delete('/marcas/:id', (req, res) =>{
    let sql = `DELETE FROM marca WHERE idMarca = ${req.params.id}`;
    let query = db.query(sql, (err, result) =>{
       if(err) throw err;
       console.log(result);
       res.send('delete..')
    });
});
app.listen('3000', () =>
    {
        console.log('Server inicio en el puerto 3000')
    }

);
