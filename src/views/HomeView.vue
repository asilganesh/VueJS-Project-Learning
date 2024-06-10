<script setup>
import { onMounted, ref } from 'vue';
import TabbableTextArea from '../components/TabbableTextArea.vue'

let textarea=ref(null)
let comment="test value"

// onMounted(()=>{

//   textarea.value.addEventListener("keydown",(e)=>{
//     let t= textarea.value;

//     if(e.code==='Tab'){
//       let val=t.value,
//       start =t.selectionStart,
//       end=t.selectionEnd
//       t.value=val.substring(0,start)+"\t"+val.substring(end);
//       t.selectionStart=t.selectionEnd=start+1;
//       e.preventDefault();
//     }
//   })
// })


// function onTabPress(e){

//     let t= e.target

//       let val=t.value,
//       start =t.selectionStart,
//       end=t.selectionEnd
//       t.value=val.substring(0,start)+"\t"+val.substring(end);
//       t.selectionStart=t.selectionEnd=start+1;
// }
</script>

<template>
  <main>  
    <form>
<TabbableTextArea  v-model="comment" style="width: 100%; height: 300px;"/>
    </form>
  </main>


</template>
