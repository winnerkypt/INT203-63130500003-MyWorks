<script setup>
const headingStyle = 'color:lightcoral'
const imagePath = ".././public/images/winner.jpg"
</script>
 
<template>
<!-- รู้อยู่แล้วว่ารูปคืออะไรใส่ได้เลย -->
<img src="./assets/logo.png"/>
<!-- ไม่รู้ว่ารูปคืออะไรเลย bind ไว้ -->
<img :src="imagePath"/>
<p>ไม่ใช้ v-bind</p>
<h1 style="color: lightblue;">Kanyapat</h1>
<p>ใช้ v-bind </p>
<h1 :style="headingStyle">Kanyapat</h1>

</template>
 
<style>

</style>