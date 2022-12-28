<template>
  <el-container v-loading="loading" class="wrapper">
    <el-header>
      <main-header/>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <main-sidebar/>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
    <auth-modal :open-auth-modal="!userStore.isLoggedIn && !loading"/>
  </el-container>
</template>

<script setup>
import AuthModal from "@/components/AuthModal"
import MainHeader from "@/components/MainHeader"
import {useUsersStore} from "@/stores/users";
import {onMounted, ref} from 'vue'
import MainSidebar from "@/components/MainSidebar";

const userStore = useUsersStore()

const loading = ref(true)

onMounted(() => {
  userStore.initializeAuth().then(()=>{
    loading.value = false
  })

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
