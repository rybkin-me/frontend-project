import {supabase} from "@/supabase";
import {COURSE_STATUS} from "@/helpers";
import {useUsersStore} from "@/stores/users";

export const fetchAdminCourses = async function (query) {
    const usersStore = useUsersStore();
    let {data, error} = await supabase
        .from('users_courses')
        .select(`
                    course:course_id!inner (*)
                `)
        .eq('user_id', usersStore.userId)
        .in('status', [COURSE_STATUS.ADMIN, COURSE_STATUS.TEACHER, COURSE_STATUS.TUTOR])
        .ilike('course.name', `%${query}%`)
    console.debug(data, error)
    return {data, error}
}
export const fetchMyCourses = async function () {
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
    console.debug(data, error)
    return {data, error}
}
export const upsertCourse = async function (formData) {

    let {data, error} = await supabase
        .from('courses')
        .upsert(formData)
        .select()
    console.debug(data, error)
    return {data, error}
}