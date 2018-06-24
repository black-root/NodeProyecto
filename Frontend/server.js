let express = require('express');
let app = express();

app.get('/', function(request, response){
    response.sendfile(__dirname+'/index.html');
});

app.listen(3001, ()=>{
    console.log('Servidor corriendo en puerto 3001');
})