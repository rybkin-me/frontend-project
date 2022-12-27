<template>
  <el-dialog
      v-model="openAuthModal"
      title="Войдите"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :show-close="false"
  >
    <el-tabs style="flex: 1" v-model="activeTabName">
      <el-tab-pane label="Sign In" name="signIn">
        <div>
          <h2>Sign in</h2>
          <el-input label="Email" type="email" v-model="email"
                    placeholder="yourmail@gmail.com"/>
          <el-input label="Password" show-password type="password" v-model="password"/>
          <el-button
              block
              type="primary"
              @click="userStore.signIn(email, password)"
          >Sign up
          </el-button>
        </div>
      </el-tab-pane>
      <el-tab-pane label="Sign Up" name="signUp">
        <div style="display:flex; flex-direction: column;">
          <h2>Sign up</h2>
          <el-input labelTop="Email" type="email" name="email" v-model="email"/>
          <el-input labelTop="Пароль" show-password type="password" v-model="password"/>
          <el-input labelTop="Повторите пароль" show-password type="password" v-model="repeatePassword"/>
          <el-button
              block
              type="primary"
              @click="userStore.signUp(email, password, username)">
            Sign up
          </el-button>
        </div>
      </el-tab-pane>
    </el-tabs>
  </el-dialog>
</template>

<script setup>
import {ref, defineProps, toRefs} from 'vue'
import {useUsersStore} from "@/stores/users";

const props = defineProps(['openAuthModal'])
const {openAuthModal} = toRefs(props)

const userStore = useUsersStore()

const activeTabName = ref('signIn')

const email = ref('')
const username = ref('')
const password = ref('')
const repeatePassword = ref('')

</script>

<style scoped>

</style>
