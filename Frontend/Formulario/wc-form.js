import  Controlador from "./controlador.js";
import AbstractResource from "../boundary/AbstractResource.js";
class dinamicForm extends HTMLElement {
    constructor(){
        super();
    }
    connectedCallback(){
        const shadow = this.attachShadow({ mode: 'open' });

        //Estilos del formulario
        let estilos = document.createElement('style');
        //estilos.innerText = '@import "wc-form.css";';
        estilos.innerText = 'input,textarea{padding:10px 18px;box-sizing:border-box;float:right;border-width:1px;border-style:solid;border-color:gray}*{margin:0;padding:0;list-style:none;text-decoration:none;border:none;outline:0;font-family:Roboto,sans-serif}input{margin-bottom:20px;width:100%}textarea{margin:8px 0;width:100%;}label{padding:10px 18px 10px 0;float:left}#postButton{width:30%}';
        shadow.appendChild(estilos);


        //clase que contiene los metodos get, post, put, delete
        let connection= new AbstractResource();
        let entidad = this.getAttribute('entidad');

        let grid = document.createElement('div');
        grid.id = 'id-grid-container';
        grid.className = 'class-grid-container';


        let form = document.createElement('form');
        form.id = 'myForm';
        form.autocomplete="on";
        form.title = this.getAttribute('titulo');
        form.className = 'formClass';
        //form.onsubmit ='return validateForm()';
        //form.method = 'post';

        //array content all the tags inside of the form
        let tag = new Array();


        //This function permit create a dynamic form.
        let crearElementos = function(){
            let con = new Controlador();
            //This function is from the class controlador
            let elementos = con.getAllElementos('wc-form');

            //we run all the Array to separate the elements
            for(let i=0; i < elementos.length; i++){
            //test :v
            //console.log(elementos[i]);
                if(elementos[i].nodeName === 'BR'){
                    tag[i]= document.createElement('br');
                    tag[i].innerHTML = elementos[i].innerHTML;
                }
                else if(elementos[i].nodeName === 'LABEL') {
                    tag[i]= document.createElement('label');
                    tag[i].className = 'lblClass';
                    tag[i].innerHTML = elementos[i].innerHTML;
                    tag[i].style = elementos[i].style;

                }
                else if (elementos[i].nodeName === 'INPUT'){
                    tag[i]= document.createElement('INPUT');
                    tag[i].style = elementos[i].style;

                    //This value is exaclty how is in the data base
                    if(elementos[i].name != null){
                        tag[i].name = elementos[i].name;
                    }

                    if(elementos[i].slot != null){
                        if(elementos[i].slot == 'pk'){
                            tag[i].onkeyup = function () {
                                let input = [];
                                input = extraerInput(input);

                                let datos = new AbstractResource();

                                if(tag[i].value != null ) {
                                    datos.findById(entidad, tag[i].value).then(data => {

                                        // separa las cabeceras
                                        let headerTb = [];
                                        for (let cabecera in data) {
                                            if (headerTb.indexOf(cabecera) === -1) {
                                                headerTb.push(cabecera);
                                            } //cierre if
                                        }

                                        //la variable cantidad es muy importante, porque el headerTb se ira modificando
                                        let cantidad = headerTb.length;
                                       // console.log(`cabecera db: ${cantidad} cantidad de inputs: ${input.length}`);
                                        for (let i = 0; i < cantidad; i++) {
                                            for (let j = 0; j < input.length; j++) {
                                                // console.log(`${headerTb[0]}  ${input[j].name}`);
                                                if (headerTb[0] == input[j].name) {
                                                    input[j].value = data[headerTb[0]];
                                                    //  console.log(`Se ingreso con exito  ${input[j].name} : ${input[j].value},  `);
                                                }
                                            }
                                            //eliminamos la primera posicion, para que no se repita la busqueda
                                            headerTb.splice(0, 1);
                                        }
                                        // console.log(data[headerTb[j]]);
                                    });
                                }else{
                                   form.reset();
                                }
                            }
                        }
                    }

                    if(elementos[i].type === 'text'){
                        tag[i].className = 'inputClassText';
                        tag[i].type = 'text';
                        tag[i].value = elementos[i].value;

                    }else if(elementos[i].type === 'number'){
                        tag[i].className = 'inputClassNumber';
                        tag[i].type = 'number';
                        tag[i].value = elementos[i].value;

                    }
                    else if(elementos[i].type === 'checkbox' ){
                        tag[i].className = 'inputClassCheckbox';
                        tag[i].type = 'checkbox';
                        tag[i].value= elementos[i].value;

                    }else if(elementos[i].type === 'email'){
                        tag[i].className = 'inputClassEmail';
                        tag[i].type = 'email';
                        tag[i].value = elementos[i].value;

                    }else if(elementos[i].type === 'password'){
                        tag[i].className = 'inputClassPassword';
                        tag[i].type = 'password';
                        tag[i].value = elementos[i].value;

                    }else if(elementos[i].type === 'radio'){
                        tag[i].className = 'inputClassRadio';
                        tag[i].type = 'radio';
                        tag[i].value= elementos[i].value;

                    }else if(elementos[i].type === 'submit'){

                    }else if(elementos[i].type === 'button'){
                      // console.log('button');
                        tag[i].type = 'button';
                        tag[i].id = elementos[i].id;
                        tag[i].value = elementos[i].value;
                        tag[i].onclick = function () {
                           //extraemos el json del formulario
                            extraerJSON(tag, tag[i].id);

                        }
                    }

                }else if (elementos[i].nodeName === 'SELECT'){
                    /*
                    <select id="mySelect">
                        <option>Apple</option>
                        <option>Orange</option>
                        <option>Pineapple</option>
                        <option>Banana</option>
                    </select>*/
                }else if(elementos[i].nodeName === 'TEXTAREA'){
                //<textarea name="textarea" rows="10" cols="50">Write something here</textarea>
                    tag[i]= document.createElement('textarea');
                    if(elementos[i].rows == null || elementos[i].cols == null){
                        tag[i].rows= '10';
                        tag[i].cols = '50';
                    }else{
                        tag[i].rows = elementos[i].rows;
                        tag[i].cols = elementos[i].cols;
                    }
                    tag[i].name = elementos[i].name;
                    tag[i].autocomplete = 'off';
                    tag[i].className = 'txtAreaClass';
                    tag[i].innerHTML = elementos[i].innerHTML;
                    tag[i].style = elementos[i].style;

                }
                form.appendChild(tag[i]);
            }
            console.log(elementos.length);
        }

        let extraerInput = function(input) {
            //extraendo los input
            let count=0;
            for(let i=0; i<tag.length; i++){
                if(tag[i].type == 'text' || tag[i].type == 'checkbox'|| tag[i].type == 'textarea' ||
                    tag[i].type == 'radio'  || tag[i].type == 'password' || tag[i].type == 'email' || tag[i].type == 'number') {
                    input[count] = tag[i];
                    count++;
                }
            }
            return input;
        }

        let extraerJSON= function(tag, metodo){
            /*arreglo pivote sirve para sacar un arreglo limpio, con la informacion util del arreglo tag que
            que trae todas las etiquetas del webcomponent*/
            let pivote = new Array();
            let cadena = `{`;
            let j = 0;
            for(let i=0; i<tag.length; i++){
                //hacemos un filtro para que solo se almacene en el pivote la info deseada de los input
                if(tag[i].type == 'text' || tag[i].type == 'checkbox'|| tag[i].type == 'textarea' ||
                    tag[i].type == 'radio'  || tag[i].type == 'password' || tag[i].type == 'email' || tag[i].type == 'number'){
                    pivote[j] = tag[i];
                    j++;
                }
            }
            //aqui empezamos a crear el formato para el json, este aun es un string
            for(let i=0; i<pivote.length; i++){
                if(pivote[i].type == 'number'){
                    cadena += `"${pivote[i].name}":${pivote[i].value}`;
                }else{
                    cadena += `"${pivote[i].name}":"${pivote[i].value}"`;
                }
                if(i>=0 && i<pivote.length-1) {
                    cadena += `, `;
                }

                //console.log(cadena); para testear
            }
            //finaliza el formato del json
            cadena +=`}`;

            console.log(cadena);
            //combertimos la cadena a un json
            let json = JSON.parse(cadena);
            console.log(json);

            //postData(json);

            //en el html asignar un id='postButton al input de button'
            if(metodo == 'postButton') {
                connection.create(entidad, json);
                form.reset();
            } else if(metodo == 'putButton'){
                connection.edit(entidad, json);
                form.reset();
            }else {
                console.log(error('No se asigno ningun ID al input de button ejem: id="putButton" o id="postButton"'));
            }


        }
/*
        let postData = function(json){
            fetch('http://localhost:8080/MantenimientoTPI-web/webresources/fabricantes', {
                method: 'post',
                headers : {
                    'Accept': 'application/json, application/xml, text/play, text/html, *.*',
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify(json)
            }).then((res) => res.json())
                .then((data) =>  console.log(data))
                .catch((err)=>console.log(err))

        }
*/
        crearElementos();

        grid.appendChild(form);
        shadow.appendChild(grid);

    }

}
window.customElements.define('wc-form', dinamicForm);