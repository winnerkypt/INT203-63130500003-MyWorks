<script setup>
import { ref } from 'vue'
import BaseButton4 from './components/BaseButton4.vue'
const bText = ref('Hello')
const bColor = ref('#FFFFFF')
</script>
<template>
  <div>
    <div>Your Text:<input type="text" v-model="bText" />{{ bText.toLowerCase() }}</div>
    <div>Your Color: {{ bColor }} <input type="color" v-model="bColor" /></div>
    <BaseButton4 :yourText="bText" :yourColor="bColor" />
  </div>
</template>
<style></style>