<template>
  <el-table
      table-layout="auto"
      :data="tasksStore.processedTasksList"
      stripe
      style="width: 100%"
  >
    <el-table-column label="Название" prop="name"/>
    <el-table-column label="Предмет" prop="subject.name"/>
    <el-table-column label="Обязательное">
      <template #default="scope">
        <el-tooltip
            :content="scope.row.is_mandatory ? 'Обязательное' : 'Не обязательное'"
            effect="dark"
            placement="top"
        >
          <el-icon
              :color="scope.row.is_mandatory ? 'var(--el-color-danger)' : 'var(--el-color-info-light-5)'"
              size="20px"
          >
            <exclamation-circle-icon/>
          </el-icon>
        </el-tooltip>
      </template>
    </el-table-column>
    <el-table-column label="Защита">
      <template #default="scope">
        <el-tooltip
            :content="scope.row.is_protectable ? 'Требует защиты' : 'Не требует защиты'"
            effect="dark"
            placement="top"
        >
          <el-icon
              :color="scope.row.is_protectable ? 'var(--el-color-danger)' : 'var(--el-color-info-light-5)'"
              size="20px"
          >
            <shield-check-icon/>
          </el-icon>
        </el-tooltip>
      </template>
    </el-table-column>
    <el-table-column label="Дедлайн сдачи">
      <template #default="scope">
        <span :class="{'warning': checkBefore(scope.row.deadline_at)}">
          {{ formatDate(scope.row.deadline_at) }}
        </span>
      </template>
    </el-table-column>
    <el-table-column label="Дедлайн защиты">
      <template #default="scope">
        <span :class="{'warning': checkBefore(scope.row.protection_deadline_at)}">
          {{formatDate(scope.row.protection_deadline_at)}}
        </span>
      </template>
    </el-table-column>
    <template #append>
    </template>
  </el-table>
</template>

<script setup>
import {useTasksStore} from "@/stores/tasks";
import {ExclamationCircleIcon, ShieldCheckIcon} from "@heroicons/vue/20/solid";
import moment from 'moment'

const tasksStore = useTasksStore()

const formatDate = (date) => {
  if (date === null) {
    return '-'
  }
  const parsedDate = moment(date)
  if (tasksStore.dateFormatMode === 'relative') {
    return parsedDate.fromNow()
  }
  return parsedDate.format("D MMMM HH:mm")
}

const checkBefore = (date) => {
  if (date === null) {
    return false
  }
  return moment(date).isBefore(moment(), "minute")
}
</script>

<style scoped>
.warning {
  color: var(--el-color-danger)
}
</style>