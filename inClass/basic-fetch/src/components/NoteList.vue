<script setup>
defineEmits(['deleteNote','editNote'])
defineProps({
  notes: {
    type: Array
  }
})
</script>
<template>
  <div>
    <h2>Note List</h2>
    <ul>
      <li v-for="(note, index) in notes" :key="index">
        Id: {{ note.id }}, Note Detail: {{ note.NoteDetail }}
        <button @click="$emit('editNote',note)">Edit</button> 
                              <!-- ส่งขอมูลทั้ง note เลย ไปให้ app -->
        <button @click="$emit('deleteNote',note.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>
<style></style>