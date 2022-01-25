<script setup>
const msg = 'dl'

</script>
 
<template>
<p>Your Message is {{ msg }}</p>
<p style="color: red;" v-show="!msg">Please insert your data</p>
</template>
 
<style>

</style>