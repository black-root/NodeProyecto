export default class Controlador{
    constructor(){
    }

    getAllElementos(nameWebComponent){
        let contenedor;

            if(nameWebComponent != null) {
                contenedor = document.querySelectorAll(`${nameWebComponent} *`);
                console.log(contenedor);
                //console.log(all[3].nodeName);
            }else{
                console.log('El metodo tiene un parametro nulo');
            }

        return contenedor;
    }

    getLabel(){

        let allLabel = document.querySelectorAll('wc-form label');
        let label;

        for(let i = 0; i < allLabel.length;i++){
            console.log(allLabel[i].slot);
            if(allLabel[i].slot == 'apellido'){
                label = allLabel[i].innerHTML;
                console.log(allLabel[i].innerHTML); // logs 'my-text'
            }

        }

        return label;
    }

}