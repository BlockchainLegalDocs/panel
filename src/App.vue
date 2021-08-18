<template>
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <AButton>Hey</AButton>
</template>

<script lang="ts" setup>
// eslint-disable-next-line import/no-unresolved
import 'virtual:windi.css';
import './stylesheets/antd.less';
import HelloWorld from './views/HelloWorld.vue';
</script>
