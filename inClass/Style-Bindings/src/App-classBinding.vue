<script setup>
const isEror =true
// const textUnderline=true
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