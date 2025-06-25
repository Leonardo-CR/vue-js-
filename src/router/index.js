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
      component: () => import('../components/ListaDeTareas.vue'),
    },
    {
      path: '/contador',
      name: 'contador',
      component: () => import('../components/Contador.vue'),
    },
  ],
})

export default router
