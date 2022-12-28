<template>
  <el-menu
      :ellipsis="false"
      mode="horizontal"
  >

    <div class="flex-grow"/>

    <el-sub-menu index="account">
      <template #title>
        {{ userStore.isUserdataSet ? userStore.userdata.fio : t('auth.account') }}
      </template>


      <el-menu-item
          index="account-signout"
          @click="userStore.signOut()"
      >
        <template #title>
          {{ t('auth.signOutPrompt') }}
        </template>
      </el-menu-item>
    </el-sub-menu>

  </el-menu>
</template>

<script setup>
import {useI18n} from "vue-i18n";
import {useUsersStore} from "@/stores/users";

const {t} = useI18n()
const userStore = useUsersStore()


</script>

<style scoped>
.flex-grow {
  flex-grow: 1;
}
</style>