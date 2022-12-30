import TaskFormPage from "@/pages/tasks/TaskFormPage";
import CourseListPage from "@/pages/courses/CourseListPage"

export const courseRoutes = [
    {
        path: '/courses',
        name: 'courseList',
        component: CourseListPage,
        meta: {
            sidebar: true,
            sidebarIndex: 'courses'
        }
    },
    {
        path: '/courses/new',
        name: 'courseNew',
        component: TaskFormPage,
        meta: {
            sidebar: true,
            sidebarIndex: 'courses'
        },
    },
]