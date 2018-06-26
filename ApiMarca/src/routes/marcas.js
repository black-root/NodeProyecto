const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database.js');

// GET all Employees
router.get('/marcas', (req, res) => {
    let sql = 'SELECT * FROM marca';
    mysqlConnection.query(sql, (err, results) => {
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