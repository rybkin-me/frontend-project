<template>
  <!--  TODO fix path in default-active-->
  <el-menu
      :collapse="isCollapsed"
      :default-active="route.path"
      :router="true"
      mode="vertical"
      style="height: 100%"
  >
    <el-menu-item
        v-for="route in routes"
        :key="route.path"
        :index="route.path"
        :route="route.route"
    >
      <el-icon>
        <box-icon :name="route.icon"/>
      </el-icon>
      <template #title>
        {{ t(route.name) }}
      </template>
    </el-menu-item>

    <div class="flex-grow"/>

    <!--    <el-menu-item index="collapse-sidebar" @click="isCollapsed = !isCollapsed" >-->
    <!--      <el-icon>-->
    <!--        <box-icon :name="isCollapsed ? 'chevron-right' : 'chevron-left'"/>-->
    <!--      </el-icon>-->
    <!--    </el-menu-item>-->
  </el-menu>
</template>

<script setup>
import {useI18n} from "vue-i18n";
import {useRoute} from "vue-router";
import {ref} from "vue";

const {t} = useI18n()
const route = useRoute()
const isCollapsed = ref(false)


const routes = [
  {
    name: 'sidebar.home',
    icon: 'home',
    path: '/',
  },
  {
    name: 'sidebar.subjects',
    icon: 'spreadsheet',
    path: '/subjects',
  },
  {
    name: 'sidebar.tasks',
    icon: 'task',
    path: '/tasks',
  },
]
</script>

<style scoped>

</style>