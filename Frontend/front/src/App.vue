<template>
  <div id="app">
    <img src="./assets/Docker-logo.png">
    <div class="contenedor">
      <div class="form">
        <formulario></formulario>
      </div>
      <div class="tabla">
        <router-view/>
      </div>
      
    </div>
  </div>
</template>

<script>
import formulario from '@/components/formulario'
export default {
  name: 'App',
  components:{
    formulario
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  margin: 0;
	padding: 0;
	list-style: none;
	text-decoration: none;
	border: none;
    outline: none;
}
img{
  margin-top: 60px;
  width: 500px;
}
.contenedor{
  display: flex;
  align-items: flex-end;
}
.form{
  width: 300px;
  height: 700px;
}
.tabla{
  margin-left: 90px;
  width: 300px;
  height: 700px;
}
</style>
