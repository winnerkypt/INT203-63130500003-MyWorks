<script setup>
import {ref} from 'vue'
const one = 'winner'
const two = 'kanyapat'
const click = ref(false);
function change(){
  click.value = !click.value
  console.log(click)
}
</script>
 
<template>
<div>
  <h1 v-if="click == false">{{ one }}</h1>
  <h1 v-if="click == true">{{ two }}</h1>
  <button @click="change">try to click!!</button>
</div>
</template>
 
<style>

</style>