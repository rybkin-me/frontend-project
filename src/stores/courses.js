import {defineStore} from 'pinia'
import {fetchMyCourses, upsertCourse} from "@/queries/courses";

export const useCoursesStore = defineStore('courses', {
    state: () => ({
        courses: null,
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
        async fetchCourses() {
            const {data, error} = await fetchMyCourses()
            if (error !== null) {
                console.log(error)
            } else {
                this.courses = data
            }
        },
        async upsertCourse(formData) {
            const {error} = upsertCourse(formData)
            if (error !== null) {
                console.log(error)
            }
        }
    },
})