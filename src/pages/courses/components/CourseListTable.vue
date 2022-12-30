<template>
  <el-table
      v-loading="loading"
      :data="coursesList"
      stripe
      style="width: 100%"
      table-layout="auto"
  >
    <el-table-column label="Название" prop="name"/>
    <el-table-column label="Описание" prop="short_description"/>
    <el-table-column label="Создатель" prop="created_by.fio"/>
    <el-table-column label="Дата начала">
      <template #default="scope">
        <span>
          {{ formatDate(scope.row.start_date) }}
        </span>
      </template>
    </el-table-column>
    <el-table-column label="Дата конца">
      <template #default="scope">
        <span>
          {{ formatDate(scope.row.end_date) }}
        </span>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
import moment from 'moment'
import {useCoursesStore} from "@/stores/courses";
import {defineProps, toRefs} from "vue";

const coursesStore = useCoursesStore()

const props = defineProps(['coursesList', 'loading'])
const {coursesList, loading} = toRefs(props)

const formatDate = (date) => {
  const parsedDate = moment(date)
  if (coursesStore.dateFormatMode === 'relative') {
    return parsedDate.fromNow()
  }
  return parsedDate.format("D MMMM YY")
}
</script>

<style scoped>
</style>