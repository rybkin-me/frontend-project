<template>

  <el-container class="wrapper">
      <el-header>
        <MainHeader/>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    <AuthModal :open-auth-modal="!userStore.isLoggedIn"/>
    <UserdataModal :open-userdata-modal="!userStore.isUserdataSet" v-if="userStore.isLoggedIn"/>
  </el-container>
</template>

<script setup>
import AuthModal from "@/components/AuthModal"
import MainHeader from "@/components/MainHeader"
import {useUsersStore} from "@/stores/users";
import {onMounted} from 'vue'
import UserdataModal from "@/components/UserdataModal";

const userStore = useUsersStore()

onMounted(() => {
  userStore.initializeAuth()
})
</script>

<style>
html, body, #app, .wrapper {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
