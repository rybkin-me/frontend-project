import {supabase} from "@/supabase";
import {flipObject, LOCALES} from "@/helpers";
import {i18n} from "@/i18n/main";

export const fetchUserData = async function (userId) {
    let {data, error} = await supabase
        .from('users')
        .select()
        .eq('auth_id', userId)
    console.debug(data, error)
    return {data, error}
}
export const signUp = async function (email, password) {
    const {data, error} = await supabase.auth.signUp({
        email: email,
        password: password
    })
    console.debug(data, error)
    return {data, error}
}
export const signIn = async function (email, password) {
    const {data, error} = await supabase.auth.signInWithPassword({
        email: email,
        password: password
    })
    console.debug(data, error)
    return {data, error}
}
export const signOut = async function () {
    const {data, error} = await supabase.auth.signOut()
    console.debug(data, error)
    return {data, error}
}

export const getSession = async function () {
    const {data, error} = await supabase.auth.getSession()
    console.debug(data, error)
    return {data, error}
}

export const setAuthStateChangeListener = async function (setSession, fetchUserData) {
    supabase.auth.onAuthStateChange(async (event, _session) => {
        await setSession(_session)
        console.debug('Session updated')
        if (event === 'SIGNED_IN' || event === 'USER_UPDATED') {
            console.debug(event)
            await fetchUserData()
        }
    })
}

export const insertUserdata = async function (fio, authId) {
    const {data, error} = await supabase
        .from('users')
        .insert([
            {
                fio: fio,
                auth_id: authId,
                locale: flipObject(LOCALES)[i18n.global.locale.value]
            },
        ])
    console.debug(data, error)
    return {data, error}
}

