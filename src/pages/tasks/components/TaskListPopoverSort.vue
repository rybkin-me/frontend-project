<template>
  <el-popover :width="200" placement="bottom" trigger="click">
    <template #reference>
      <el-button :icon="ArrowsUpDownIcon"/>
    </template>
    <el-space direction="vertical">
      <el-radio-group v-model="listSortKey" class="ml-4">
        <el-radio
            label="name"
        >
          Название
        </el-radio>
        <el-radio
            label="deadline_at"
        >
          Дедлайн сдачи
        </el-radio>
        <el-radio
            label="protection_deadline_at"
        >
          Дедлайн защиты
        </el-radio>
        <el-radio
            label="open_at"
        >
          Дата выдачи
        </el-radio>
      </el-radio-group>
      <div class="sort-switch-wrapper">
        <el-switch
            v-model="listSortOrder"
            :active-icon="ArrowUpIcon"
            :inactive-icon="ArrowDownIcon"
            active-value="asc"
            inactive-value="desc"
            size="large"
        />
      </div>
    </el-space>
  </el-popover>

</template>

<script setup>
import {ref, watch} from "vue";
import {useTasksStore} from "@/stores/tasks";
import {ArrowDownIcon, ArrowsUpDownIcon, ArrowUpIcon} from "@heroicons/vue/24/solid";

const tasksStore = useTasksStore()
const listSortKey = ref('deadline_at')
const listSortOrder = ref('asc')

function changeListSortKey() {
  tasksStore.setListSortKey(listSortKey.value)
}

function changeListSortOrder() {
  tasksStore.setListSortOrder(listSortOrder.value)
}

watch(listSortKey, changeListSortKey)
watch(listSortOrder, changeListSortOrder)

</script>

<style scoped>
.sort-switch-wrapper {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>