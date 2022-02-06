<script setup>import { computed, ref } from 'vue'
const base = ref(4)
const height = ref(2)
let area = computed(() => (1 / 2) * base.value * height.value)

</script>

 <template>
  <div>
    <p>
      Base:
      <input type="number" v-model="base"/>
    </p>
    <p>
      Height:
      <input type="number" v-model="height"/>
    </p>

    <p>Result:{{ area }}</p>
  </div>
</template>


 
<style>
</style>