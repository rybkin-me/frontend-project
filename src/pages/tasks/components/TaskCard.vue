<template>
  <el-card>
    <template #header>
      <div class="card-header">
        <el-space :spacer="spacer" direction="horizontal">
          <span>{{ task.name }}</span>
          <!--TODO translations-->
          <el-tooltip
              :content="task.is_mandatory ? 'Обязательное' : 'Не обязательное'"
              effect="dark"
              placement="top"
          >
            <el-icon
                :color="task.is_mandatory ? 'var(--el-color-danger)' : 'var(--el-color-info-light-5)'"
                size="20px"
            >
              <exclamation-circle-icon/>
            </el-icon>
          </el-tooltip>
          <el-tooltip
              :content="task.is_protectable ? 'Требует защиты' : 'Не требует защиты'"
              effect="dark"
              placement="top"
          >
            <el-icon
                :color="task.is_protectable ? 'var(--el-color-danger)' : 'var(--el-color-info-light-5)'"
                size="20px"
            >
              <shield-check-icon/>
            </el-icon>
          </el-tooltip>
        </el-space>
      </div>
    </template>

    <el-descriptions :column="1">
      <el-descriptions-item label="Предмет">
        <span>
          {{ task.course.name }}
        </span>
      </el-descriptions-item>
      <el-descriptions-item label="Дедлайн сдачи">
        <span :class="{'warning': checkBefore(task.deadline_at)}">
          {{ formatDate(task.deadline_at) }}
        </span>
      </el-descriptions-item>
      <el-descriptions-item label="Дедлайн защиты">
        <span :class="{'warning': checkBefore(task.protection_deadline_at)}">
          {{ formatDate(task.protection_deadline_at) }}
        </span>
      </el-descriptions-item>
    </el-descriptions>
  </el-card>
</template>

<script setup>
import {ExclamationCircleIcon, ShieldCheckIcon} from "@heroicons/vue/20/solid";
import {defineProps, h, ref} from "vue";
import {ElDivider} from "element-plus";
import moment from "moment";
import {useTasksStore} from "@/stores/tasks";

const props = defineProps(['task'])
const task = ref(props.task)
const spacer = h(ElDivider, {direction: 'vertical'})

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
.card-header {
  display: flex;
}

.warning {
  color: var(--el-color-danger)
}
</style>