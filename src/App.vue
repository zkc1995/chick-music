<script setup lang="ts">
import mHeader from 'components/m-header/m-header.vue'
</script>

<template>
  <div @touchmove.prevent>
    <m-header></m-header>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>


