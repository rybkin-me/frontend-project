import {defineStore} from 'pinia'
import {supabase} from "@/supabase";

export const useTasksStore = defineStore('tasks', {
    state: () => ({
        tasks: null,
        settings: {
            filters: {},
            dateFormatMode: 'absolute',
            sortKey: 'deadline_at',
            sortOrder: 'asc',
            viewMode: 'table',
            refreshList: true
        }
    }),
    getters: {
        processedTasksList(state) {
            if (state.tasks !== null) {
                let sortFunc = (a, b) => (a[state.settings.sortKey] < b[state.settings.sortKey]) ? 1 : -1
                if (state.settings.sortOrder === 'asc') {
                    sortFunc = (a, b) => (a[state.settings.sortKey] > b[state.settings.sortKey]) ? 1 : -1
                }
                return state.tasks
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
        async fetchTasks() {
            let {data, error} = await supabase
                .from('tasks')
                .select(`
                id,
                name,
                is_mandatory,
                is_protectable,
                deadline_at,
                protection_deadline_at,
                course:course_id (
                    id,
                    name
                )
                `)
            console.log(data, error)
            if (error !== null) {
                console.log(error)
            } else {
                this.tasks = data
            }
            // console.log(this.userdata)
        },
        async upsertTask(formData) {
            let {data, error} = await supabase
                .from('tasks')
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