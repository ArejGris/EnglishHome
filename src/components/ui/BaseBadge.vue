<template>
    <section class="badge" :class="mode" @click="isTrue">
        <slot></slot>
    </section>
</template>
<script>
export default{
  emits:['send'],
inject:['letter'],
    props:['id'],
    data(){
      return{
mode:null
      }
    },
   
    methods:{
isTrue(){
  if(this.id.charAt(0).toUpperCase()===this.letter){
    this.mode='green'
  }else{
    this.mode='red'
  }
  
    
}}}
</script>
<style scoped>
.badge {
  background-color: #ccc;
  color: #252525;
  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin-right: 0.5rem;
}

.green {
  background-color: #218d00;
  color: white;
}

.red {
  background-color: #e01212;
  color: white;
}

</style>
