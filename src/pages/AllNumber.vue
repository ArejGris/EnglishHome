<template>
    <base-card>
    <ul v-if="status===1">
        <the-number v-for="number in numbers"
        :key="number"
        :number="number.val"
        :color="number.color"
        @send="show"></the-number>
        
    </ul>
    <ul v-if="status===2">
        <the-number v-for="number in numbers"
        :key="number"
        :number="number.val"
        :color="number.color"
        @send="show2"></the-number>
        
    </ul>
    <ul v-if="status===3">
        <the-number v-for="number in numbers"
        :key="number"
        :number="number.val"
        :color="number.color"
        @send="show3"></the-number>
        
    </ul>
    
    <ul class="oper">
        <the-operateor v-for="op in operations"
        :key="op"
        :op="op"
        @clicked="setOp">
            
        </the-operateor>
    </ul>
        
    
        
    
    
        <section :class="mode" class="mode">
            <h1>
            {{number}} {{oper}} {{number2}} <strong>=</strong> {{res}}  </h1>
          
        </section>
        <section>
<base-button @click="clear">clear</base-button>
<base-button @click="test">test</base-button>
<base-button @click="result">result</base-button>
    </section></base-card>
    
</template>
<script>
import TheNumber from './TheNumber.vue';
export default{
    
    components:{
        TheNumber
    },
    data(){
       
        return{ mode:null,
            
            status:1,
            number:null,
            number2:null,
            res:null,
            oper:null,
            operations:['+','-','*','/','='],
            numbers:[{val:'0',color:'red'},{val:'1',color:'red'},{val:'2',color:'blue'},{val:'3',color:'green'},{val:'4',color:'yellow'},{val:'5',color:'gray'},{val:'6',color:'pink'},{val:'7',color:'brown'},{val:'8',color:'purple'},{val:'9',color:'nine'}]
        }
    },
    provide(){
        return{
numbers:this.numbers
        }
    },
    computed:{
sum(){
    return Number(this.number)+Number(this.number2)
}
    },
    methods:{
       show(id){
        const number=this.numbers.find(a=>a.val===id);
        if(this.number===null){this.number=number.val;}
        else{
            this.number+=number.val
        }
        


       } ,
       show2(id){
const number2=this.numbers.find(a=>a.val===id);
if(this.number2===null){
this.number2=number2.val;}
else{
    this.number2+=number2.val
}
       },
       setOp(oper){    
        if(oper!=='='){
            this.oper=oper;
            this.status=2;
        }
       
        if(oper==='='&&this.number2===null){
            return;
        }
        if(oper==='='&&this.number2!==null){
            this.status=3
        }
console.log(this.oper)
       },
       show3(id){
        
const number3=this.numbers.find(a=>a.val===id);
if(this.res===null){
    this.res=number3.val
}else{
this.res+=number3.val;}
 },
 test(){
    let res=0;
    const n1=Number(this.number);
const n2=Number(this.number2);
if(this.oper==='+'){res=n1+n2}
if(this.oper==='-'){res=n1-n2}
if(this.oper==='*'){res=n1*n2}
if(this.oper==='/'){res=n1/n2}
if(res===Number(this.res)){
    this.mode='true';
    this.status=1;
    console.log('hi')
}else{
    this.mode='false';
}
      
 },
 result(){
    let res=0;
    const n1=Number(this.number);
const n2=Number(this.number2);
if(this.oper==='+'){res=n1+n2}
if(this.oper==='-'){res=n1-n2}
if(this.oper==='*'){res=n1*n2}
if(this.oper==='/'){res=n1/n2}
this.res=res;
 },

       clear(){

        this.number=null;
    this.number2=null;
    this.res=null;
    this.mode=null;
    this.oper=null;
    this.status=1;
       }
    }

}
</script>
<style scoped>
ul{
    list-style: none;
    display: flex;
}
section ul{
    display: flex;
}
.true{
    background-color: rgb(146, 238, 181);
    color:white
}
.false{
    background-color: red;
    color:white
}
.p{
    background-color: inherit;
    font:bolder;
    font-size: xx-large;
}
.oper{
    margin :5px;
    text-align: center;
}
.mode{
    border-radius: 3px;
    border: 1px solid white;
    height: 2rem;
    margin:  1.2rem 5px;
}
</style>