import {defineStore} from 'pinia'
import {supabase} from "@/supabase";

export const useUsersStore = defineStore('todos', {
    state: () => ({
        session: null,
    }),
    getters: {
        isLoggedIn(state) {
            return state.session !== null
        },
        // /**
        //  * @returns {{ text: string, id: number, isFinished: boolean }[]}
        //  */
        // filteredTodos(state) {
        //     if (this.filter === 'finished') {
        //         // call other getters with autocompletion ✨
        //         return this.finishedTodos
        //     } else if (this.filter === 'unfinished') {
        //         return this.unfinishedTodos
        //     }
        //     return this.todos
        // },
    },
    actions: {
        async initializeAuth() {
            const {data, error} = await supabase.auth.getSession()
            console.log(data, error)
            if (error) {
                console.log(error)
            }
            this.session = data.session
            supabase.auth.onAuthStateChange((_, _session) => {
                this.session = _session
            })
        },
        async signIn(email, password) {
            const {data, error} = await supabase.auth.signInWithPassword({
                email: email,
                password: password
            })
            console.log(data, error)
        },
        async signUp(email, password) {
            const {data, error} = await supabase.auth.signUp({
                email: email,
                password: password
            })
            console.log(data, error)
        },
        async signOut() {
            const {error} = await supabase.auth.signOut()
            console.log(error)
        }
    },
})