import {supabase} from "@/supabase";

export const fetchMyTasks = async function () {
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
    console.debug(data, error)
    return {data, error}
}
export const upsertTask = async function (formData) {
    const {data, error} = await supabase
        .from('tasks')
        .upsert(formData)
        .select()
    console.debug(data, error)
    return {data, error}
}