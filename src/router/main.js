import {createRouter, createWebHashHistory} from "vue-router";
import HomePage from "@/pages/home/HomePage"
import {taskRoutes} from "@/router/tasks";
import {courseRoutes} from "@/router/courses";

const routes = [
    {
        path: '/',
        component: HomePage,
        meta: {
            sidebar: true,
            sidebarIndex: 'home'
        }
    },
    ...taskRoutes,
    ...courseRoutes
]


export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})