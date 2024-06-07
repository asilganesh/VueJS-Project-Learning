<script setup>
import { useStorage } from '@/composables/useStorage';



let food = useStorage('food','salad')
let age = useStorage('age','18')


</script>

<template>
  <main>
    <p>
    What is favourite food? <input type="text" v-model="food"  /> 
  </p>
  <p>
   How old are you ?<input type="text" v-model="age"  /> 
  </p>
  </main>

  
</template>

<!-- <script>
// import TheWelcome from '../components/TheWelcome.vue'
// import { ref } from 'vue';

import { useFlash } from '@/composables/useFlash';
export default{

  setup(){
    let {flash} = useFlash();

    return {flash};
  }


}
</script>

<template>
  <main>
    <button @click="flash('it works')">Click</button>

    <!-- <TheWelcome />
    <p>{{ message }}</p>
    <button @click="doSomething">Click Me!</button> -->
<!-- </main>
</template> -->
-->
