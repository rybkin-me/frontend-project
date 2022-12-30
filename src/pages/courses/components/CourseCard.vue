<template>
  <el-card>
    <template #header>
      <div class="card-header">
        <el-space :spacer="spacer" direction="horizontal">
          <span>{{ course.name }}</span>
        </el-space>
      </div>
    </template>

    <el-descriptions :column="1">
      <el-descriptions-item label="Описание">
        <span>
          {{ course.short_description ? course.short_description : '-' }}
        </span>
      </el-descriptions-item>
      <el-descriptions-item label="Дата начала">
        <span>
          {{
            formatDate(
                course.start_date,
                coursesStore.dateFormatMode === 'relative'
            )
          }}
        </span>
      </el-descriptions-item>
      <el-descriptions-item label="Дата конца">
        <span>
          {{
            formatDate(
                course.end_date,
                coursesStore.dateFormatMode === 'relative'
            )
          }}
        </span>
      </el-descriptions-item>
    </el-descriptions>
  </el-card>
</template>

<script setup>

import {defineProps, h, ref} from "vue";
import {ElDivider} from "element-plus";
import {formatDate} from "@/helpers";
import {useCoursesStore} from "@/stores/courses";

const props = defineProps(['course'])
const course = ref(props.course)
const spacer = h(ElDivider, {direction: 'vertical'})

const coursesStore = useCoursesStore()

</script>

<style scoped>
.card-header {
  display: flex;
}
</style>