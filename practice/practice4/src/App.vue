<script setup>
import { ref } from 'vue'
import List from './components/List.vue'
const infoProj = [
  { 
    'GitRepo': 'umaporn-sup/INT203class',
    'ProjectTitle':'Bingo Game'
  },
  {
    'GitRepo': 'students/Sec2_Group1',
    'ProjectTitle':'Flash Card'
  },
  { 
    'GitRepo': 'students/Sec3_Group2',
    'ProjectTitle':'Tic Tac Toe'
  }
]

const newMsg = ref('');
const showConfirmMsg = (confirmMsg) =>{
  newMsg.value=confirmMsg
}
</script>
 
<template>
<div>
  <h1>INT203' student projects</h1>
  <List :lists="infoProj" @confirm="showConfirmMsg"/>
  <p>current status: {{ newMsg }}</p>
</div>
</template>
 
<style>

</style>