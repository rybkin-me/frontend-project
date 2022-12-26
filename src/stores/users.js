import {defineStore} from 'pinia'
import {supabase} from "@/supabase";

export const useUsersStore = defineStore('todos', {
    state: () => ({
        session: null,
        userdata: null
    }),
    getters: {
        isLoggedIn(state) {
            return state.session !== null
        },
        isUserdataSet(state) {
            return state.userdata !== null
        },
    },
    actions: {
        async initializeAuth() {
            const {data, error} = await supabase.auth.getSession()
            console.log(data, error)
            if (error) {
                console.log(error)
            }
            this.session = data.session
            await this.fetchUserData()
            supabase.auth.onAuthStateChange(async (_, _session) => {
                this.session = _session
                await this.fetchUserData()
            })
        },
        async fetchUserData() {
            if (this.session !== null) {
                let {data, error} = await supabase
                    .from('users')
                    .select()
                    .eq('auth_id', this.session.user.id)
                console.log(data, error)
                if (data.length === 0) {
                    this.userdata = null
                } else {
                    this.userdata = data[0]
                }
            }
            console.log(this.userdata)
        },
        async updateUserdata(last_name, first_name, middle_name) {
            const {data, error} = await supabase
                .from('users')
                .insert([
                    {
                        last_name: last_name,
                        first_name: first_name,
                        middle_name: middle_name,
                        auth_id: this.session.user.id
                    },
                ])
            console.log(data, error)
            await this.fetchUserData()

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