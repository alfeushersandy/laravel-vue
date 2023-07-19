//import dulu vue routernya
import { createRouter, createWebHistory } from 'vue-router';

//define the route
const routes = [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/auth/LoginPage')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('@/views/auth/RegisterPage')
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/IndexPage')
    },
]

//create router 
const router = createRouter({
    history: createWebHistory(),
    routes //dari const routes diatas
})

//export routernya
export default router