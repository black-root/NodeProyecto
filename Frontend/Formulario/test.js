let findById = function(){
        return fetch(`http://localhost:8080/MantenimientoTPI-web/webresources/fabricantes/2`,
            {
                method: "GET",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            }
        ).then(function (request) {
            // Convertir a JSON
            return request.json();
        }).then(function (data) {
            // data es un objeto JSON
            let a=[];

            let ids = [];
            let pivote;
            let count=0;
            console.log(a);
            console.log(data);

            let headerTb = [];
            for(let cabecera in data){
                if(headerTb.indexOf(cabecera)===-1){
                    headerTb.push(cabecera);

                    if(cabecera.indexOf("id") > -1){
                       // console.log(cabecera);
                    }
                } //cierre if
            }

            for (let i = 0; i < headerTb.length; i++) {
             console.log(headerTb[i]);
            }

            for(let j=0; j<headerTb.length; j++){

                console.log(data[headerTb[j]]);
            }

            let bandera =true;
            let nombres = new Array ("idFabricante");
                for(let i=0; i<headerTb.length;i++){
                    for(let j=0; j<nombres.length;j++){
                        if(headerTb[i] == nombres[j]){
                            bandera = false;
                            //console.log(headerTb[i]);
                        }
                    }

                }

            console.log(bandera);
            let b =false;
            let j=0;
            let cantidad =headerTb.length;
                 for(let i=0; i<cantidad; i++){
                     console.log(`${headerTb[0]} ${headerTb.length}`);
                     headerTb.splice(0, 1);

                 }

            return data;

        });
}





