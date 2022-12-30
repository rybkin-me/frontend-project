import {defineStore} from 'pinia'
import {fetchCourseInfo, fetchMyCourses, upsertCourse} from "@/queries/courses";

export const useCoursesStore = defineStore('courses', {
    state: () => ({
        courses: null,
        courseInfo: null,
        settings: {
            filters: {},
            dateFormatMode: 'absolute',
            sortKey: 'name',
            sortOrder: 'asc',
            viewMode: 'table',
            refreshList: true
        }
    }),
    getters: {
        processedCoursesList(state) {
            if (state.courses !== null) {
                let sortFunc = (a, b) => (a[state.settings.sortKey] < b[state.settings.sortKey]) ? 1 : -1
                if (state.settings.sortOrder === 'asc') {
                    sortFunc = (a, b) => (a[state.settings.sortKey] > b[state.settings.sortKey]) ? 1 : -1
                }
                return state.courses
                    .sort(sortFunc)
            }
            return null
        },
        listViewMode(state) {
            return state.settings.viewMode
        },
        dateFormatMode(state) {
            return state.settings.dateFormatMode
        }
    },
    actions: {
        setListViewMode(mode) {
            this.settings.viewMode = mode
        },
        setDateFormatMode(mode) {
            this.settings.dateFormatMode = mode
        },
        setListSortKey(key) {
            this.settings.sortKey = key
        },
        setListSortOrder(order) {
            this.settings.sortOrder = order
        },
        setListRefresh() {
            this.settings.refreshList = true
        },
        resetListRefresh() {
            this.settings.refreshList = false
        },
        resetCourseInfo() {
            this.courseInfo = null
        },
        async fetchCourses() {
            const {data} = await fetchMyCourses()
            this.courses = data
        },
        async fetchCourseInfo(courseId) {
            const {data} = await fetchCourseInfo(courseId)
            this.courseInfo = data
        },
        async upsertCourse(formData) {
            await upsertCourse(formData)
        }
    },
})