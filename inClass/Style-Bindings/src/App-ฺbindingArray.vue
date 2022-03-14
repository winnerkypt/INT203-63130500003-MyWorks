<script setup>
const isItalic = true
const redText = 'color:red'
const italicText ='font-style:italic'
</script>
 
<template>
<p :style="[redText, isItalic ? italicText : '']">
Lorem ipsum dolor sit amet consectetur adipisicing elit. 
Sequi vero voluptates quasi debitis alias facilis saepe mollitia 
commodi magni officiis accusamus placeat, 
laborum nihil natus cupiditate repellendus nisi, nesciunt sapiente?</p>
</template>
 
<style>

</style>