<template>
  <el-form
      :rules="rules"
      :model="formData"
      label-position="top"
      label-width="auto"
      v-loading="loading"
  >
    <el-form-item label="Email" prop="email">
      <el-input name="email" type="email" v-model="formData.email"/>
    </el-form-item>
    <el-form-item :label="t('auth.password')" prop="password">
      <el-input show-password type="password" v-model="formData.password"/>
    </el-form-item>
    <el-form-item>
      <el-button
          block
          type="primary"
          @click="signIn">
        {{ t('auth.signInPrompt') }}
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>

import {reactive, ref} from "vue";
import {useI18n} from "vue-i18n";
import {useUsersStore} from "@/stores/users";
const {t} = useI18n()
const userStore = useUsersStore()

const loading = ref(false)

const signIn = async () => {
  loading.value = true
  await userStore.signIn(formData)
  loading.value = false
}

const formData = reactive({
  email: '',
  password: '',
})

// TODO password validation
// const validatePass = (rule, value, callback) => {
//   if (value === '') {
//     callback(new Error('Please input the password'))
//   } else {
//     if (formData.repeatePassword !== '') {
//       formData.value.validateField('repeatePassword', () => null)
//     }
//     callback()
//   }
// }
// const validatePass2 = (rule, value, callback) => {
//   if (value === '') {
//     callback(new Error('Please input the password again'))
//   } else if (value !== formData.password) {
//     callback(new Error("Two inputs don't match!"))
//   } else {
//     callback()
//   }
// }
const rules = reactive({
  email: [
    {required: true, message: t('messages.formValidation.requiredNotFilled'), trigger: 'blur'},
    {type: 'email', message: t('messages.formValidation.wrongTypeEmail'), trigger: 'blur'},
  ],
  password: [
    {required: true, message: t('messages.formValidation.requiredNotFilled'), trigger: 'blur'},
    // { validator: validatePass, trigger: 'blur' },
  ],
})
</script>

<style scoped>

</style>