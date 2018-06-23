const express = require('express');
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

const app = express();


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
       console.log(results);
       res.status(200).json(results);
   });
});
//select by id
app.get("/marcas/:id", (req, res) => {
    let sql = `SELECT * FROM marca WHERE idMarca = ${req.params.id} `;
    let query = db.query(sql, (err, results) => {
        if (err) throw err;
        console.log(results);
        res.status(200).json(results);
    });
});



app.listen('3000', () =>
    {
        console.log('Server inicio en el puerto 3000')
    }

);