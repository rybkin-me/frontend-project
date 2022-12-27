<template>
  <el-dialog
      v-model="openUserdataModal"
      title="Заполните данные о себе"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :show-close="false"
  >
    <div>
      <h2>Заполните данные о себе</h2>
      <el-input labelTop="Фамилия" type="email" v-model="last_name"/>
      <el-input labelTop="Имя" type="email" v-model="first_name"/>
      <el-input labelTop="Отчество" type="email" v-model="middle_name"/>
      <el-button
          block
          type="primary"
          @click="userStore.updateUserdata(last_name, first_name, middle_name)"
      >Sign up
      </el-button>
    </div>
  </el-dialog>
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
