<script setup>
const invalidMessage = 'red'
const italicText = 'italic'
const isItalic = false
const propItalic ='font-style:italic'
const propRed ='color:red'
</script>
 
<template>
<!-- style binding with obj -->
<input type="text"/>
<p :style="{color:invalidMessage,'font-style':italicText}">please input your text</p>
<p :style="isItalic ? propItalic:propRed">italic or coloring text</p>
<p :style="{ color : isItalic ? 'red' : 'green'}">test</p>
</template>
 
<style>

</style>