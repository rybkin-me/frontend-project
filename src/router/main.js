import {createRouter, createWebHashHistory} from "vue-router";
import HomePage from "@/pages/home/HomePage"
import {taskRoutes} from "@/router/tasks";

const routes = [
    {
        path: '/',
        component: HomePage,
        meta: {
            sidebar: true,
            sidebarIndex: 'home'
        }
    },
    ...taskRoutes
]


export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})