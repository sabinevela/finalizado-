import { createRouter, createWebHistory } from 'vue-router'
import FormularioComponent from './components/FormularioComponent.vue'
import GuardarDatos from './components/GuardarDatos.vue'

const routes = [
  {
    path: '/formulario',
    name: 'formulario',
    component: FormularioComponent
  },
  {
    path: '/vista',
    name: 'vista',
    component: GuardarDatos
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
