<template>
<!--  TODO fix path in default-active-->
  <el-menu
      :default-active="route.path"
      :router="true"
      :ellipsis="false"
      mode="horizontal"
  >
    <el-menu-item
        :index="route.path"
        v-for="route in routes"
        :key="route.path"
        :route="route.route"
    >
      <el-icon>
        <box-icon :name="route.icon"/>
      </el-icon>
      <span>{{ route.name }}</span>
    </el-menu-item>

    <div class="flex-grow" />

    <el-sub-menu index="account">
      <template #title>{{t('menu.account')}}</template>

      <el-menu-item index="account-signout" @click="userStore.signOut()">
        {{ t('auth.signOutPrompt') }}
      </el-menu-item>
    </el-sub-menu>

  </el-menu>
</template>

<script setup>
import {useI18n} from "vue-i18n";
import {useRoute} from "vue-router";
import {useUsersStore} from "@/stores/users";

const {t} = useI18n()
const route = useRoute()
const userStore = useUsersStore()


const routes = [
  {
    name: t('menu.home'),
    icon: 'home',
    path: '/',
  },
  {
    name: t('menu.subjects'),
    icon: 'spreadsheet',
    path: '/subjects',
  },
  {
    name: t('menu.tasks'),
    icon: 'task',
    path: '/tasks',
  },
]
</script>

<style scoped>
.flex-grow {
  flex-grow: 1;
}
</style>