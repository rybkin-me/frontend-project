import CourseFormPage from "@/pages/courses/CourseFormPage";
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
        component: CourseFormPage,
        meta: {
            sidebar: true,
            sidebarIndex: 'courses'
        },
    },
]