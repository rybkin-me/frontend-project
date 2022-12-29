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
        <component :is="route.icon"/>
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
import {HomeIcon, RectangleStackIcon} from "@heroicons/vue/24/outline";

const {t} = useI18n()
const route = useRoute()
const isCollapsed = ref(false)


const routes = [
  {
    name: 'sidebar.home',
    icon: HomeIcon,
    path: '/',
  },
  {
    name: 'sidebar.tasks',
    icon: RectangleStackIcon,
    path: '/tasks',
  },
]
</script>

<style scoped>

</style>