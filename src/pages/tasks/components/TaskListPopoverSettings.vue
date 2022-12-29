<template>
  <el-popover :width="200" placement="bottom" trigger="click">
    <template #reference>
      <el-button :icon="Cog6ToothIcon"/>
    </template>
    <el-form
        label-position="top"
        label-width="auto"
    >
      <el-form-item label="View mode">
        <el-switch
            v-model="listViewMode"
            :active-icon="Squares2X2Icon"
            :inactive-icon="Bars3Icon"
            active-value="cards"
            inactive-value="table"
            size="large"
        />
      </el-form-item>
      <el-form-item label="Date format">
        <el-switch
            v-model="dateFormatMode"
            :active-icon="BoltIcon"
            :inactive-icon="CalendarDaysIcon"
            active-value="relative"
            inactive-value="absolute"
            size="large"
        />
      </el-form-item>
    </el-form>
  </el-popover>

</template>

<script setup>
import {ref, watch} from "vue";
import {useTasksStore} from "@/stores/tasks";
import {Bars3Icon, BoltIcon, CalendarDaysIcon, Cog6ToothIcon, Squares2X2Icon} from "@heroicons/vue/24/solid";

const tasksStore = useTasksStore()
const listViewMode = ref(false)
const dateFormatMode = ref('absolute')

function switchListViewMode() {
  tasksStore.setListViewMode(listViewMode.value)
}

function switchDateFormatMode() {
  tasksStore.setDateFormatMode(dateFormatMode.value)
}

watch(listViewMode, switchListViewMode)
watch(dateFormatMode, switchDateFormatMode)

</script>

<style scoped>
.sort-switch-wrapper {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>