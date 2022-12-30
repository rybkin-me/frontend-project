import {defineStore} from 'pinia'
import {fetchMyTasks, upsertTask} from "@/queries/tasks";

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
            let {data, error} = await fetchMyTasks()
            if (error !== null) {
                console.log(error)
            } else {
                this.tasks = data
            }
        },
        async upsertTask(formData) {
            let {error} = await upsertTask(formData)
            if (error !== null) {
                console.log(error)
            }
        },
    },
})