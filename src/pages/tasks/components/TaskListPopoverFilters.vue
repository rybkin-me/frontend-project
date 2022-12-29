<template>
  <el-popover :width="250" placement="bottom" trigger="click">
    <template #reference>
      <el-button :icon="FunnelIcon" disabled/>
    </template>

    <!--    <el-form-->
    <!--        label-width="auto"-->
    <!--        label-position="top"-->
    <!--    >-->
    <!--      <el-form-item label="Activity name">-->
    <!--        <el-input v-model="sizeForm.name" />-->
    <!--      </el-form-item>-->
    <!--    </el-form>-->
    <!--    <el-radio-group v-model="listSortKey" class="ml-4">-->
    <!--      <el-radio-->
    <!--          label="name:asc"-->
    <!--      >-->
    <!--        Название-->
    <!--      </el-radio>-->
    <!--      <el-radio-->
    <!--          label="deadline_at:asc"-->
    <!--      >-->
    <!--        Дедлайн (сверху ближайший)-->
    <!--      </el-radio>-->
    <!--      <el-radio-->
    <!--          label="deadline_at:desc"-->
    <!--      >-->
    <!--        Дедлайн (сверху далекий)-->
    <!--      </el-radio>-->
    <!--      <el-radio-->
    <!--          label="open_at:asc"-->
    <!--      >-->
    <!--        Дедлайн (сверху ближайший)-->
    <!--      </el-radio>-->
    <!--      <el-radio-->
    <!--          label="open_at:desc"-->
    <!--      >-->
    <!--        Дедлайн (сверху далекий)-->
    <!--      </el-radio>-->
    <!--    </el-radio-group>-->
  </el-popover>

</template>

<script setup>
// import {reactive} from "vue";
// import {useTasksStore} from "@/stores/tasks";
import {FunnelIcon} from "@heroicons/vue/24/solid";

// const tasksStore = useTasksStore()
// const listFilters = reactive()

// function changeListSortKey() {
//   tasksStore.setListSortKey(listSortKey.value)
// }

// watch(listFilters, changeListSortKey)

</script>

<style scoped>

</style>