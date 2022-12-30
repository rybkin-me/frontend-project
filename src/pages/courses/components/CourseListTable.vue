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
          {{
            formatDate(
                scope.row.start_date,
                coursesStore.dateFormatMode === 'relative'
            )
          }}
        </span>
      </template>
    </el-table-column>
    <el-table-column label="Дата конца">
      <template #default="scope">
        <span>
          {{
            formatDate(
                scope.row.end_date,
                coursesStore.dateFormatMode === 'relative'
            )
          }}
        </span>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
import {formatDate} from "@/helpers";
import {useCoursesStore} from "@/stores/courses";
import {defineProps, toRefs} from "vue";

const coursesStore = useCoursesStore()

const props = defineProps(['coursesList', 'loading'])
const {coursesList, loading} = toRefs(props)

</script>

<style scoped>
</style>