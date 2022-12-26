<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <AuthModal :open-auth-modal="!userStore.isLoggedIn"/>
   <UserdataModal :open-userdata-modal="!userStore.isUserdataSet" v-if="userStore.isLoggedIn"/>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <it-button type="success" @click="userStore.signOut()">Log out</it-button>
</template>

<script setup>
import AuthModal from "@/components/AuthModal"
import HelloWorld from "@/components/HelloWorld"
import {useUsersStore} from "@/stores/users";
import {onMounted} from 'vue'
import UserdataModal from "@/components/UserdataModal";

const userStore = useUsersStore()

onMounted(() => {
  userStore.initializeAuth()
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
