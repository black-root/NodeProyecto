<div id="app" class="ui vertical stripe segment">
        <div class="ui container">
            <div id="content" class="ui basic segment">
                <h3 class="ui header">List of Users</h3>
                <vuetable
                    api-url="http://172.25.0.30:3000/marcas"
                    table-wrapper="#content"
                    :fields="columns"
                    :item-actions="itemActions"
                ></vuetable>
            </div>
        </div>
    </div>
	<script>
	    new Vue({
	        el: '#app',
	        data: {
	            columns: [
	                'Id',
	                'Nombre',
	                'Descripcion',
	                'e-mail',
	                'Telefono',
	                'Website'
				],
	            itemActions: [
	               // { name: 'view-item', label: '', icon: 'zoom icon', class: 'ui teal button' },
	                { name: 'edit-item', label: '', icon: 'edit icon', class: 'ui orange button'},
	                { name: 'delete-item', label: '', icon: 'delete icon', class: 'ui red button' }
	            ]
	        },
	        methods: {
	            viewProfile: function(id) {
	                console.log('view profile with id:', id)
	            }
	        },
	        events: {
	            'vuetable:action': function(action, data) {
	                console.log('vuetable:action', action, data)
	                if (action == 'view-item') {
	                    this.viewProfile(data.id)
	                }
	            },
	            'vuetable:load-error': function(response) {
	                console.log('Load Error: ', response)
	            }
	        }
        })
	</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
