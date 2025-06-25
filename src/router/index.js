import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView,
    // },
    {
      path: '/lista-tareas',
      name: 'lista-tareas',
      component: () => import('../modules/Contador/components/Contador.vue'),
    },
    {
      path: '/contador',
      name: 'contador',
      component: () => import('../modules/ListaDeTareas/components/ListaDeTareas.vue'),
    },
    {
      path: '/registrar',
      name: 'registrar',
      component: () => import('../modules/registro/views/RegistrarView.vue'),
    },
    {
      path: '/calcular',
      name: 'calcular',
      component: () => import('../modules/calcular/views/CalcularView.vue'),
    },
  ],
})

export default router
