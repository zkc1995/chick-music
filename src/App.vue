<script setup lang="ts">
import mHeader from 'components/m-header/m-header.vue'
import tab from 'components/tab/tab.vue'
</script>

<template>
  <div @touchmove.prevent>
    <m-header></m-header>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>


