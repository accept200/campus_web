import { RouteRecordRaw } from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";

const routers: RouteRecordRaw[] = [
    {
        name: 'home',
        path: '/',
        component: () => HomeView,
        meta: {
            title: 'Home',
            requiresAuth: false
        }
    },
    {
        name: 'about',
        path: '/',
        component: () => AboutView,
        meta: {
            title: 'About',
            requiresAuth: false
        }
    }
]
export default routers;