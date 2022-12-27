import {defineStore} from 'pinia'
import {supabase} from "@/supabase";
import {useUsersStore} from "@/stores/users";
import {GROUP_STATUS} from "@/helpers";

export const useGroupsStore = defineStore('groups', {
    state: () => ({
        groups: null
    }),
    getters: {},
    actions: {
        async fetchMyGroups(
            groupStatus=GROUP_STATUS.STUDENT
        ) {
            const userStore = useUsersStore()
            let {data, error} = await supabase
                .from('users_groups')
                .select(`
                    groups (*),
                    status
                `)
                .eq('user_id', userStore.userId)
                .eq('status', groupStatus)
            console.log(data, error)
            // if (data.length === 0) {
            //     this.userdata = null
            // } else {
            //     this.userdata = data[0]
            // }
            // console.log(this.userdata)
        },
        async updateUserdata(last_name, first_name, middle_name) {
            const {data, error} = await supabase
                .from('users')
                .insert([
                    {
                        last_name: last_name,
                        first_name: first_name,
                        middle_name: middle_name,
                        auth_id: this.userId
                    },
                ])
            console.log(data, error)
            await this.fetchUserData()

        },
    },
})