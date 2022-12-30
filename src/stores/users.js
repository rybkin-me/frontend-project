import {defineStore} from 'pinia'
import {i18n} from "@/i18n/main";
import {LOCALES} from "@/helpers";
import moment from "moment";
import {
    fetchUserData,
    getSession,
    insertUserdata,
    setAuthStateChangeListener,
    signIn,
    signOut,
    signUp
} from "@/queries/users";

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
            await setAuthStateChangeListener(this.setSession, this.fetchUserData)
            await getSession()
        },
        async setSession(session) {
            this.session = session
        },
        async fetchUserData() {
            if (this.session !== null) {
                let {data} = await fetchUserData(this.session.user.id)
                if (data.length === 0) {
                    this.userdata = null
                } else {
                    this.userdata = data[0]
                    i18n.global.locale.value = LOCALES[this.userdata.locale]
                    moment.locale(LOCALES[this.userdata.locale])
                }
            }
        },
        async signIn(formData) {
            const {email, password} = formData
            await signIn(email, password)
        },
        async signUp(formData) {
            const {email, password, fio} = formData
            const {data: authData, error: authError} = await signUp(email, password)
            if (authError === null) {
                await insertUserdata(fio, authData.user.id)
            }
        },
        async signOut() {
            await signOut()
            this.userdata = null
            this.session = null
        }
    },
})