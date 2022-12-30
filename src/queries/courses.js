import {supabase} from "@/supabase";
import {COURSE_STATUS, processError} from "@/helpers";
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
    processError(error)
    return {data}
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
    processError(error)
    return {data}
}
export const upsertCourse = async function (formData) {

    let {data, error} = await supabase
        .from('courses')
        .upsert(formData)
        .select()
    processError(error)
    return {data}
}