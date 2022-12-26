<template>
  <it-modal v-model="openUserdataModal" :closable-mask="false">
    <template #body>
          <div>
            <h2>Заполните данные о себе</h2>
            <it-input labelTop="Фамилия" prefix-icon="email" type="email" v-model="last_name"/>
            <it-input labelTop="Имя" prefix-icon="email" type="email" v-model="first_name"/>
            <it-input labelTop="Отчество" prefix-icon="email" type="email" v-model="middle_name"/>
            <it-button
                block
                size="big"
                type="primary"
                @click="userStore.updateUserdata(last_name, first_name, middle_name)"
            >Sign up
            </it-button>
          </div>
    </template>
  </it-modal>
</template>

<script setup>
import {ref, defineProps, toRefs} from 'vue'
import {useUsersStore} from "@/stores/users";

const props = defineProps(['openUserdataModal'])
const {openUserdataModal} = toRefs(props)

const userStore = useUsersStore()

const last_name = ref('')
const first_name = ref('')
const middle_name = ref('')

</script>

<style scoped>

</style>
