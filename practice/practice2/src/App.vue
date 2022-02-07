<script setup>
import { ref, computed } from 'vue';
const lists = ref()
const filter = ref()


function search(){
 
  const w = document.getElementsByTagName("li")
   
  for (let index = 0; index < w.length; index++) {

    let y = w[index].textContent
    if (y.indexOf(filter.value) > -1) {
      w[index].style.display = ''
    } else {
      w[index].style.display = "none"
    }
  }
}
function addNote() {
  if (lists.value != null && lists.value != "") {
    // document.getElementById("list").insertAdjacentHTML("beforeend", "<li>" + lists.value + "</li>")
    const a = document.getElementById("list")
    const b = document.createElement("li")
    const c = document.createTextNode(lists.value)
    a.appendChild(b)
    b.appendChild(c)
  }
}
// const search = computed(() => 




</script>
 
<template>
  <div>
    Filter Note :
    <input type="text" id="filter" v-model="filter" @keyup="search"/>
    <ul id="list"></ul>
  </div>

  <p>
    New Note :
    <input type="text" v-model="lists" />
    <button @click="addNote">Add Note</button>
  </p>
</template>
 
<style>
</style>