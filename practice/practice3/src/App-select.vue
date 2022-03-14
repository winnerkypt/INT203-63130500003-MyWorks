<script setup>
import { ref } from 'vue'
const name = ref('')
const sex = ref('')
</script>
 
<template>
  <div>
    <div>
      Name :
      <input type="text" v-model="name" />
    </div>
    <div>
      <input type="radio" id="f" value="Female" v-model="sex" />
      <label for="f">Female</label>
      <input type="radio" id="m" value="Male" v-model="sex" />
      <label for="f">Male</label>
    </div>
    <br>
    <div>
      Your Name is {{ name }}
      <br>
      Your sex is {{ sex }}
    </div>
  </div>
</template>
 
<style>
</style>