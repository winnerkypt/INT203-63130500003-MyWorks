<script setup>import { computed, ref } from 'vue'
const base = ref(4)
const height = ref(2)
const result = ref(0)
//arrow function expression
// const computeArea = () => {
//   result.value = (1 / 2) * base * height
//   console.log(result.value)
// }
let area = computed(() =>  (1 / 2) * base.value * height.value)

</script>

 <template>
  <div>
    <p>Base: {{ base }}</p>
    <button @click="++base">increase base each 1</button>
    <p>Height: {{ height }}</p>
    <button @click="++height">increase heighr each 1</button>
    <p>Result:{{ area }}</p>
  </div>
</template>


 
<style>
</style>