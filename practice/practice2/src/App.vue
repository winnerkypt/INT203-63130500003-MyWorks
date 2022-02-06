<script setup>
import { ref } from 'vue';
const lists = ref()

function addNote() {
  if (lists.value != null && lists.value != "") {
    document.getElementById("list").insertAdjacentHTML("beforeend", "<li>" + lists.value + "</li>")
  }
}
</script>
 
<template>
  <div v-show="lists" >
     Filter Note :
    <input type="text" id="filter"/>
  </div>
  <ul id="list"></ul>

  <p>
    New Note :
    <input type="text" v-model="lists" />
    <button @click="addNote">Add Note</button>
  </p>
</template>
 
<style>
</style>