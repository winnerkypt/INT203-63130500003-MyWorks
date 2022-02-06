<script setup>
import { reactive } from 'vue'
console.clear()
const counter = reactive(1)
console.log(counter)

// obj
console.log("----- obj --------")
const winner = reactive({firstName: 'Kanyapat', lastName:'Wittaymanitkul'})
console.log(winner)
console.log(winner.firstName)
console.log(winner.lastName)

// array
console.log("----- array ------")
const familys = reactive(['Kanyapat','Tanawat','Kanchart','Nantapon'])
console.log(familys)
console.log(familys[0])
</script>
 
<template>
<p>Counter : {{ counter }}</p>

<!-- obj -->
<h3>------ obj -------</h3>
<p>Winner : {{ winner }}</p>
<p>Winner's first name : {{ winner.firstName }}</p>
<p>Winner's last name : {{ winner.lastName }}</p>

<!-- array -->
<h3>------ array -------</h3>
<p>Familys : {{ familys }}</p>
<p>First index of familys : {{ familys[0] }}</p>
</template>
 
<style>

</style>