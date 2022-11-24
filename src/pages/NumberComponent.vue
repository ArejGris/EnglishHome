<template>
    <transition>
        
    <li v-if="active">
    <div class="container" >
<section>
 <div class="oper">
       <one-number :number="num1" :color="color" ></one-number>
    <div class="on"><strong>+</strong></div>
       <one-number :number="num2" :color="color"></one-number>
 </div>
 <div><base-button @click="add">add</base-button></div>
</section>
<section>
    <two-number v-for="cop in comps"
    :key="cop.num1"
    :n1="cop.num1"
    :n2="cop.num2"
    :color="cop.color"
    ></two-number>
</section>
</div>
</li>
    </transition>

</template>
<script>
import TwoNumber from './TwoNumber.vue';
import OneNumber from './OneNumber.vue';
export default{
    components:{
TwoNumber,OneNumber
    },
    props: ['number','color'],
    inject:['numbers'],
   computed:{
active(){
    return this.$store.getters.number===this.number
},
},
    data() {
        return {
            num1: 0,
            num2: 0,
            res: 0,
            comps:[],
         
        };
    },
    created() {
        this.num1 = this.number;
    },
    methods: {
        add() {
            const newIem = {
                num1: this.num1,
                 num2:this.num2,
                 color:this.color
            }
           if(this.num1>0){
             this.num1--;
            this.num2++;
        
            this.comps.unshift(newIem);}
        }
        
    }
}
</script>
<style scoped>
button{
    font:inherit;
    padding: .5rem 1.5rem;
}
section{
    margin:2rem;
    padding:1rem
}
.on{
    margin-right: .6rem;
}
.container{
    display: flex;
    justify-content: center;
    text-align: center;
}
.oper{
    display: flex;
    margin: 1rem;
}
.v-enter-from{
opacity: 0;
transform: translateY(-30px);
}
.v-enter-active{
transition: all 1s ease-out;
}

.v-enter-to{
opacity: 1;
transform: translateY(1);
}

</style>