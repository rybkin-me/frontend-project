import CourseFormPage from "@/pages/courses/CourseFormPage";
import CourseListPage from "@/pages/courses/CourseListPage"
import CourseInfoPage from "@/pages/courses/CourseInfoPage"

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
    {
        path: '/courses/:courseId',
        name: 'courseInfo',
        component: CourseInfoPage,
        meta: {
            sidebar: true,
            sidebarIndex: 'courses'
        },
    },
]