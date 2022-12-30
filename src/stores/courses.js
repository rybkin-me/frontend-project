import {defineStore} from 'pinia'
import {supabase} from "@/supabase";

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
            let {data, error} = await supabase
                .from('courses')
                .select(`
                id,
                name,
                short_description,
                start_date,
                end_date,
                created_by (
                    id,
                    fio
                )
                `)
            console.log(data, error)
            if (error !== null) {
                console.log(error)
            } else {
                this.courses = data
            }
            // console.log(this.userdata)
        },
        async upsertCourse(formData) {
            let {data, error} = await supabase
                .from('courses')
                .upsert(formData)
                .select()

            console.log(data, error)
            if (error !== null) {
                console.log(error)
            }
            // console.log(this.userdata)
        },
        // async updateUserdata(last_name, first_name, middle_name) {
        //     const {data, error} = await supabase
        //         .from('users')
        //         .insert([
        //             {
        //                 last_name: last_name,
        //                 first_name: first_name,
        //                 middle_name: middle_name,
        //                 auth_id: this.userId
        //             },
        //         ])
        //     console.log(data, error)
        //     await this.fetchUserData()
        // },
    },
})