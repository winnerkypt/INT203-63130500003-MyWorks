<script setup>
const isEror =true
const decorText=true
</script>
 
<template>
<p :class="{ errMsg : isEror, textUnderline:decorText}">this is example</p>
</template>
 
<style>
.errMsg{
  color: red;
}
.textUnderline{
  text-decoration: underline;
}
</style>