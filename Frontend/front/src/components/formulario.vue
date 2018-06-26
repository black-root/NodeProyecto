<template>
  <form method="POST" @submit.prevent="envioPost">
  <label>Nombre de la Marca:</label>
  <input type="text" name="nombre" placeholder="Ej: Asus" v-model="info.nombreMarca">
  <br>
  <label>Descripcion:</label><br>
  <textarea  rows="5" cols="40" name="descripcion" v-model="info.descripcion" placeholder="Escriba una breve descripción de la Marca"></textarea>
  <br>
  <label>E-mail</label>
  <input type="email" name="correo" v-model="info.email" placeholder="ejemplo@correo.com">
  <br>
  <label>Telefono:</label><br>
  <input type="text" name="telefono" placeholder="Ej: 7777-7777" v-model="info.telefono">
  <br>
  <label>Website:</label><br>
  <input type="text" name="website" placeholder="Ej: www.asus.com" v-model="info.website">
  <br>
  <input type="button" value="Crear" id="postButton" @click.prevent="getValores()"> 
  </form> 
</template>

<script>
import axios from 'axios';
export default {
     name: 'formulario',
     data(){
      return{
        info:{
          nombreMarca: '',
          descripcion: '',
          email: '',
          telefono:'',
          website:'',
        }
       }
     },
     methods:{
       getValores(){
         let valor = {
           nombreMarca: this.info.nombreMarca,
           descripcion: this.info.descripcion,
           email: this.info.email,
           telefono: this.info.telefono,
           website: this.info.website,
         };
         //console.log(this.valor)
         let options = {
                method: 'post'
            };
        axios.post('http://localhost:3000/marcas/', valor, options)
        .then(result => { console.log(result) })
       }
     }
}
</script>
<style scoped>
 form{
   width: 100%;
   padding: 10px;
   float: left;
   margin-top: 30px;
   margin-left: 60px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
   
 }
 input{
    margin-bottom: 5px;
    padding: 5px 6px;
    box-sizing: border-box;
    float: right;
    border-width: 1px;
    border-style: solid;
    border-color: gray;
    width: 100%;
    background-color: rgb(255, 255, 255);
}
textarea{
    margin-bottom: 5px;
    padding: 5px 6px;
    margin: 8px 0;
    box-sizing: border-box;
    float: right;
    border-width: 1px;
    border-style: solid;
    border-color: gray;
    width: 100%;
}
label{
    padding: 5px 6px;
    padding-left: 0;
    float: left;
    font-weight: bold;
}
</style>
