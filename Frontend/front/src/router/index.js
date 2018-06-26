import Vue from 'vue'
import Router from 'vue-router'
import tablav from '@/components/tablav'
import formulario from '@/components/formulario'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'tablav',
      component: tablav
    }
  ]
})
