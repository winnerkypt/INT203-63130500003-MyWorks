<script setup>
import { ref } from 'vue'
const unKnownImage = ref('images/003.jpg')

</script>
 
<template>
  <div>
    <!-- รู้ชื่อไฟล์อยู่แล้ว -->
    <h1>My Images</h1>
    <img src="./assets/logo.png" />
    <div>
      <!-- ยังไม่รู้ชื่อไฟล์ ต้องเอาไว้ที่ public เพราะต้องรอประมวลผล -->
      <h2>image dynamic binding</h2>
      <img :src="unKnownImage" />
    </div>
  </div>
</template>
 
<style>
</style>