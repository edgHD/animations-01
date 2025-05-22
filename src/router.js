import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import AllItems from './pages/AllItems.vue'
const routes = [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/all-items',
            name: 'AllItems',
            component: AllItems
        }
    ]
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router