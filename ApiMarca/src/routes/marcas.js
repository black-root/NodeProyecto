const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database.js');

<<<<<<< HEAD:ApiMarca/app.js
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

const mysql = require('mysql');

//crear conexion
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mantenimiento',
    port: '3300'

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
=======
// GET all Employees
router.get('/marcas', (req, res) => {
    let sql = 'SELECT * FROM marca';
    mysqlConnection.query(sql, (err, results) => {
>>>>>>> Fronted:ApiMarca/src/routes/marcas.js
        if(err) throw err;
        //console.log(results);
        res.status(200).json(results);
    });
 });
 //select by id
 router.get("/marcas/:id", (req, res) => {
     let sql = `SELECT * FROM marca WHERE idMarca = ${req.params.id} `;
     mysqlConnection.query(sql, (err, results) => {
         if (err) throw err;
         //console.log(results);
         res.status(200).json(results);
     });
 });
 
 router.post('/marcas', (req, res) => {
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
     mysqlConnection.query(sql, marcaData, (err, results) => {
         if (err) throw err;
         console.log(results);
         res.json({
             success: true,
             msg: 'Marca Insertada',
             data: marcaData
         });
     });
 
 
 });

 
 router.delete('/marcas/:id', (req, res) =>{
     let sql = `DELETE FROM marca WHERE idMarca = ${req.params.id}`;
     mysqlConnection.query(sql, (err, result) =>{
        if(err) throw err;
        console.log(result);
        res.send('delete..')
     });
 });

module.exports = router;