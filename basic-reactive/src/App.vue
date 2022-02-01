<script setup>
import {ref} from "vue"
console.clear()
const counter = ref(1)
console.log(counter.value)

// obj
console.log("----- obj --------")
const winner = ref({firstName: 'Kanyapat', lastName:'Wittaymanitkul'})
console.log(winner.value)
console.log(winner.value.firstName)
console.log(winner.value.lastName)

// array
console.log("----- array ------")
const familys = ref(['Kanyapat','Tanawat','Kanchart','Nantapon'])
console.log(familys.value)
console.log(familys.value[0])
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