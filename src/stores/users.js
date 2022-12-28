import {defineStore} from 'pinia'
import {supabase} from "@/supabase";
import {i18n} from "@/i18n/main";
import {flipObject, LOCALES} from "@/helpers";

export const useUsersStore = defineStore('users', {
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
        userId(state) {
            if (this.isUserdataSet) {
                console.log(state.userdata.id)
                return state.userdata.id
            }
            return null
        }
    },
    actions: {
        async initializeAuth() {
            const {data, error} = await supabase.auth.getSession()
            console.log('session: ', data, error)
            if (error) {
                console.log(error)
            }
            this.session = data.session
            await this.fetchUserData()
            supabase.auth.onAuthStateChange(async (_, _session) => {
                this.session = _session
            })
        },
        async fetchUserData() {
            if (this.session !== null) {
                let {data, error} = await supabase
                    .from('users')
                    .select()
                    .eq('auth_id', this.session.user.id)
                console.log('userdata: ', data, error)
                if (data.length === 0) {
                    this.userdata = null
                } else {
                    this.userdata = data[0]
                    i18n.global.locale.value = LOCALES[this.userdata.locale]
                }
            }
        },
        async signIn(formData) {
            const {email, password} = formData
            console.log(email, password)
            const {data, error} = await supabase.auth.signInWithPassword({
                email: email,
                password: password
            })
            console.log(data, error)
        },
        async signUp(formData) {
            const {email, password, fio} = formData
            console.log(email, password, fio)
            const {data: authData, error: authError} = await supabase.auth.signUp({
                email: email,
                password: password
            })
            console.log(authData, authError)
            if (authError === null) {
                const {data: userData, error: userError} = await supabase
                    .from('users')
                    .insert([
                        {
                            fio: fio,
                            auth_id: authData.user.id,
                            locale: flipObject(LOCALES)[i18n.global.locale.value]
                        },
                    ])
                console.log(userData, userError)
            }
        },
        async signOut() {
            const {error} = await supabase.auth.signOut()
            console.log(error)
        }
    },
})