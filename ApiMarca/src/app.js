const express = require('express');
const app = express();

//muestra los mensajes por consola
const morgan = require('morgan');

//necesario para comprender las peticiones POST
const bodyParser = require('body-parser');

//settings
app.set('port', process.env.PORT || 3000);

//middlewares
//veremos un mensaje por consola cuando se haga una peticion.
app.use(morgan('dev'));

//aplicaciones clientes envian datos, y con esta linea la API comprende dichos datos
app.use(bodyParser.json());

require('./routes/MarcasRoutes')(app);

app.listen(app.get('port'), () =>{
    console.log('server on port 3000');
})