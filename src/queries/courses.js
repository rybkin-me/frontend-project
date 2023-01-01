import {supabase} from "@/supabase";
import {COURSE_STATUS, processError} from "@/helpers";

export const fetchAdminCourses = async function (query, userId) {
    let {data, error} = await supabase
        .from('courses_users')
        .select(`
                    course:course_id!inner (*)
                `)
        .eq('user_id', userId)
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
export const fetchCourseInfo = async function (courseId) {
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
                ),
                tasks (
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
                ),
                users:courses_users (
                    id,
                    status,
                    joined_at,
                    user:user_id (
                        id,
                        fio
                    )
                ),
                invites:courses_invites (
                    id,
                    name,
                    revoked,
                    max_users,
                    times_used,
                    created_at,
                    created_by (
                        fio
                    )
                )
                `)
        .eq('id', courseId)
        .single()
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
export const createInvite = async function (formData) {
    let {data, error} = await supabase
        .from('courses_invites')
        .upsert(formData)
        .select()
    processError(error)
    return {data}

    // maxUsers, course_id
}