import TaskListPage from "@/pages/tasks/TaskListPage";
import TaskFormPage from "@/pages/tasks/TaskFormPage";

export const taskRoutes = [
    {
        path: '/tasks',
        name: 'taskList',
        component: TaskListPage,
        meta: {
            sidebar: true,
            sidebarIndex: 'tasks'
        }
    },
    {
        path: '/tasks/new',
        name: 'taskNew',
        component: TaskFormPage,
        meta: {
            sidebar: true,
            sidebarIndex: 'tasks'
        },
    },
]