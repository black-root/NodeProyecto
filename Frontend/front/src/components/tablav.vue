<template>
  <div id=tabla-cont>
    <table>
      <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>e-mail</th>
            <th>Telefono</th>
            <th>Website</th>
          </tr>
      </thead>
      <tbody>
        <tr v-for="info in infos">
          <td> {{info.idMarca}} </td>
          <td>{{info.nombreMarca}}</td>
          <td>{{info.descripcion}}</td>
          <td>{{info.email}}</td>
          <td>{{info.telefono}}</td>
          <td>{{info.website}}</td>
        </tr>
      </tbody>
    </table>
    
    </div>
    

</template>

<script>
import axios from 'axios';

export default {
  name: 'tablav',
  data(){
    return{
      infos:[]
    } 
  },
  created(){ 
    let options = {
                method: 'GET',
                headers:{
                  'Accept':'aplication/json',
                  'content-type':'aplication/json'
                  },
                mode: 'cors'
            };
    axios.get('http://localhost:3000/marcas/',options)
    .then(response =>{this.infos =response.data})
    .catch(error => console.log(error))
  }  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#tabla-cont{
    width: 100%;
    height: 400px;
    margin-top: 30px;
    margin-left: 40px;
}
table{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    max-height: 50%;
    width: 100%;
    white-space: nowrap;
    border-collapse: collapse;
    border-spacing: 0;
    -webkit-overflow-scrolling: touch;
    background-attachment: scroll, scroll;
    background-repeat: no-repeat;
}
th{
  padding: 0.5em;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    text-transform: uppercase;
}
thead{
  background-color: #1A1F25;
    font-size: 1.1em;
    color: white;
    font-family: 'Roboto', sans-serif;
    text-align: left;
}
tbody tr:nth-child(odd){
    background-color:#EBEBEB;

}

tbody tr:nth-child(even) {
    background-color: #FFFFFF;

}
tr:hover{
    background-color: rgb(104, 102, 102);
    color: blue;
    cursor: pointer;
}

td{
    padding: 0.5em;
    font-family: 'Nunito', sans-serif;
}
</style>
