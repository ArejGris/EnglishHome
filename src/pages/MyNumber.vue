<template>
    <base-card>
    <section>
    <ul>   
   <one-number v-for="number in numbers1"
   :key="number.val"
   :number="number.val"
   :color="number.color"
   @send="action"></one-number>
    </ul>
    <ul>   
   <one-number v-for="n in numbers2"
   :key="n.val"
   :number="n.val"
   :color="n.color"
   @send="action"></one-number>
    </ul>
</section>
</base-card>
   
    <section class="list">
       
        
            
    <number-component v-for="number in numbers"
    :key="number.val"
    :number="number.val"
    :color="number.color">
</number-component>

   
    </section>
</template>
<script>
import OneNumber from './OneNumber.vue';
import NumberComponent from './NumberComponent.vue';
export default{
    components:{
        OneNumber,NumberComponent
    }
  
  ,data(){
    return{
        numbers1:[{val:'0',color:'light'},{val:'1',color:'red'},{val:'2',color:'blue'},{val:'3',color:'green'},{val:'4',color:'yellow'}],
        numbers2:[{val:'5',color:'gray'},{val:'6',color:'pink'},{val:'7',color:'mix'},{val:'8',color:'purple'},{val:'9',color:'nine'}],
 numbers:[{val:'0',color:'light'},{val:'1',color:'red'},{val:'2',color:'blue'},{val:'3',color:'green'},{val:'4',color:'yellow'},{val:'5',color:'gray'},{val:'6',color:'pink'},{val:'7',color:'mix'},{val:'8',color:'purple'},{val:'9',color:'nine'}]
    }
  },
  methods:{
    action(number){
       
        this.$store.dispatch('set',number)
    }
  }

   
}
</script>
<style scoped>
ul{
    list-style: none;
    display:flex;
    margin: .4rem;
}
.list{
    list-style: none;
    display: inline-block;
}
section{
    display: inline-block;
    
    z-index: 1;
}

</style>