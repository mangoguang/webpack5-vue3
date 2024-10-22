<template>
  <h1>{{ name }}</h1>
  <p>hello mango</p>
  <el-button>click</el-button>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { ElButton } from 'element-plus'
import { useMainStore } from './store/main.ts'

const mainStore = useMainStore()

console.log('mainStore---', mainStore)

const name = ref('mangogaung')
</script>
