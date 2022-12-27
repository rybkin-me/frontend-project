import {createRouter, createWebHashHistory} from "vue-router";
import GroupsList from "@/pages/groups/GroupsList"
import TasksList from "@/pages/tasks/TasksList"
import SubjectsList from "@/pages/subjects/SubjectsList"

const routes = [
    {
        path: '/groups',
        component: GroupsList,
    },
    {
        path: '/subjects',
        component: SubjectsList
    },
    {
        path: '/tasks',
        component: TasksList
    }
]


export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})