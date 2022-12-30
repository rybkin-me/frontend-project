<template>
  <el-container v-loading="loading">
    <div v-if="coursesList !== null && coursesList.length > 0"
         style="width: fit-content">
      <el-space
          wrap
      >
        <course-card
            v-for="course in coursesList"
            :key="course.id"
            :course="course"
        />
      </el-space>
    </div>
    <el-empty v-else description="Тут пока ничего нет" style="width: 100%"/>
  </el-container>
</template>

<script setup>
import CourseCard from "@/pages/courses/components/CourseCard";
import {defineProps, ref, watch} from "vue";

const props = defineProps(['coursesList', 'loading'])
const coursesList = ref(props.coursesList)
const loading = ref(props.loading)


watch(() => props.loading, () => loading.value = props.loading)

</script>

<style scoped>
</style>