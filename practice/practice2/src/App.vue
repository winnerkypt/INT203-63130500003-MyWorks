<script setup>
import { ref, computed } from 'vue'
const newNotes = ref('');
const noteArr = ref([])
const filter = ref('')
const filterNotes = computed(() => noteArr.value.filter((note) =>
  note.includes(filter.value)
))
function addNote() {
  noteArr.value.push(newNotes.value)
}

</script>
 
<template>
  <div>
    filter note :
    <input type="text" v-model="filter"/>
    <ul>
      <li v-for="list in filterNotes">{{ list }}</li>
    </ul>add new note :
    <input type="text" v-model="newNotes" />
    <button @click="addNote">add note</button>
  </div>
</template>
 
<style>
</style>