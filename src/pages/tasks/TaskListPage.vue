<template>
  <el-container v-loading="loading" class="">
    <el-header>
      <div class="header">
        <h2>Задания</h2>
        <el-space direction="horizontal">
          <task-list-popover-filters/>
          <task-list-popover-sort/>
          <task-list-popover-settings/>
          <el-button :icon="ArrowPathIcon" @click="fetchTasks()"/>
          <el-button type="primary" @click="redirectToTaskForm()">
            Создать
          </el-button>
        </el-space>
      </div>
    </el-header>

    <el-main>
      <task-list-cards
          v-if="tasksStore.listViewMode === 'cards'"
      />
      <task-list-table
          v-else-if="tasksStore.listViewMode === 'table'"
      />
    </el-main>
  </el-container>
  <el-backtop :bottom="100" :right="100"/>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {useTasksStore} from "@/stores/tasks";
import TaskListCards from "@/pages/tasks/components/TaskListCards";
import TaskListTable from "@/pages/tasks/components/TaskListTable";
import TaskListPopoverSettings from "@/pages/tasks/components/TaskListPopoverSettings";
import TaskListPopoverFilters from "@/pages/tasks/components/TaskListPopoverFilters";
import TaskListPopoverSort from "@/pages/tasks/components/TaskListPopoverSort";
import {ArrowPathIcon} from "@heroicons/vue/24/solid";
import {useRouter} from "vue-router";

const loading = ref(false)
const tasksStore = useTasksStore()
const router = useRouter()

const fetchTasks = async () => {
  loading.value = true
  tasksStore.fetchTasks().then(() => {
    loading.value = false
  })
}
const redirectToTaskForm = () => {
  router.push({name: 'taskNew'})
}

onMounted(() => {
  if (tasksStore.processedTasksList === null) {
    fetchTasks()
  }
})
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
</style>