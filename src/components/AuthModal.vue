<template>
  <it-modal v-model="openAuthModal" :closable-mask="false">
    <template #body>
      <it-tabs style="flex: 1" >
        <it-tab title="Sign In">
          <div>
            <h2>Sign in</h2>
            <it-input labelTop="Email" prefix-icon="email" type="email" v-model="email"
                      placeholder="yourmail@gmail.com"/>
            <it-input labelTop="Password" prefix-icon="lock" type="password" v-model="password"/>
            <it-button
                block
                size="big"
                type="primary"
                @click="userStore.signIn(email, password)"
            >Sign up
            </it-button>
          </div>
        </it-tab>
        <it-tab title="Sign Up">
          <div style="display:flex; flex-direction: column;">
            <h2>Sign up</h2>
            <it-input labelTop="Email" prefix-icon="email" type="email" name="email" v-model="email"/>
            <it-input labelTop="Пароль" prefix-icon="lock" type="password" v-model="password"/>
            <it-input labelTop="Повторите пароль" prefix-icon="lock" type="password" v-model="repeatePassword"/>
            <it-button
                block
                size="big"
                type="primary"
                @click="userStore.signUp(email, password, username)">
              Sign up
            </it-button>
          </div>
        </it-tab>
      </it-tabs>
    </template>
  </it-modal>
</template>

<script setup>
import {ref, defineProps, toRefs} from 'vue'
import {useUsersStore} from "@/stores/users";

const props = defineProps(['openAuthModal'])
const {openAuthModal} = toRefs(props)

const userStore = useUsersStore()

const email = ref('')
const username = ref('')
const password = ref('')
const repeatePassword = ref('')

</script>

<style scoped>

</style>
