<template>
  <el-container v-loading="loading">
    <div v-if="tasksList !== null && tasksList.length > 0"
         style="width: fit-content">
      <el-space
          wrap
      >
        <task-card
            v-for="task in tasksList"
            :key="task.id"
            :task="task"
        />
      </el-space>
    </div>
    <el-empty v-else description="Тут пока ничего нет" style="width: 100%"/>
  </el-container>
</template>

<script setup>
import TaskCard from "@/pages/tasks/components/TaskCard";
import {defineProps, ref, watch} from "vue";

const props = defineProps(['tasksList', 'loading'])
const tasksList = ref(props.tasksList)
const loading = ref(props.loading)


watch(() => props.loading, () => loading.value = props.loading)

</script>

<style scoped>
</style>