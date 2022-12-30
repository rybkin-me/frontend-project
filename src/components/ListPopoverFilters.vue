<template>
  <el-popover :width="250" placement="bottom" trigger="click">
    <template #reference>
      <el-button :icon="FunnelIcon" disabled/>
    </template>

  </el-popover>

</template>

<script setup>
import {FunnelIcon} from "@heroicons/vue/24/solid";
</script>

<style scoped>

</style>