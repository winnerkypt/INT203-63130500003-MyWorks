<script setup>
const score = 60
</script>
 
<template>
<h1>Your score : {{ score }}</h1>
<p v-if="score >= 80">Very Good</p>
<p v-else-if="score >= 75">Good</p>
<p v-else-if="score>=65">Fair</p>
<p v-else>Need Improvement</p>
</template>
 
<style>

</style>