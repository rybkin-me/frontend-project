<template>
  <el-dialog
      v-model="openAuthModal"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
      :show-close="false"
      :title="t('auth.authorization')"
  >
    <el-tabs v-model="activeTabName" style="flex: 1">
      <el-tab-pane :label="t('auth.signIn')" name="signIn">
        <div>
          <sign-in-form/>
        </div>
      </el-tab-pane>
      <el-tab-pane :label="t('auth.signUp')" name="signUp">
        <sign-up-form/>
      </el-tab-pane>
    </el-tabs>
  </el-dialog>
</template>

<script setup>
import {defineProps, ref, toRefs} from 'vue'
import SignUpForm from "@/components/SignUpForm";
import SignInForm from "@/components/SignInForm";
import {useI18n} from "vue-i18n";

const {t} = useI18n()

const props = defineProps(['openAuthModal'])
const {openAuthModal} = toRefs(props)

const activeTabName = ref('signIn')


</script>

<style scoped>

</style>
