<template>
    <base-card>
  <section >
        
        <ul>
<the-letter v-for="alpha in one"
:key="alpha"
:letter="alpha"
:color="alpha" @send="action"></the-letter>
    </ul>
    <ul>
<the-letter v-for="alpha in two"
:key="alpha"
:letter="alpha"
:color="alpha" @send="action"></the-letter>
    </ul>
    <ul>
<the-letter v-for="alpha in three"
:key="alpha"
:letter="alpha"
:color="alpha" @send="action"></the-letter>
    </ul>
       
           
   </section>

   <section>
    <ul>
<letter-test v-for="alpha in alphas"
:key="alpha.id"
:id="alpha.id"
:letter="alpha.letter"
:color="alpha.letter"
:words="alpha.word"></letter-test>
</ul>
    
   </section>
</base-card>
</template>
<script>
import LetterTest from './LetterTest.vue';
import TheLetter from './TheLetter.vue';
export default{
    components:{
LetterTest,TheLetter
    },
   
           methods:{
           
            action(letter){
                this.$store.dispatch('setLetter',letter);
            }

           },
    data(){
        return{
            one:['A','B','C','D','E','F','G','H','I'],
            two:['J','K','L','M','N','O','P','Q','R'],
            three:['S','T','U','V','W','X','Y','Z'],
            alphas:[
                {
                   id:1, letter:'A' ,word:['ant','ambrella','bear','lion']
                },
                {
                    id:2,letter:'B' ,word:['ant','battarie','bear','lion']
                },
                {
                    id:3,letter:'C' ,word:['cat','rabbit','bear','tiger']
                },
                {
                   id:4, letter:'D' ,word:['dot','ambrella','doll','bear']
                },
                {
                    id:5,letter:'E' ,word:['elephant','lion','ege','lion']
                },
                {
                    id:6,letter:'F' ,word:['ant','frog','bear','foot']
                },
                {
                    id:7,letter:'G' ,word:['lion','giraffe','bear','jar']
                },
                {
                    id:8,letter:'H' ,word:['hat','ambrella','hand','ege']
                },
                {
                   id:9, letter:'I' ,word:['jar','inc','bear','lion']
                },
                {
                    id:10,letter:'J' ,word:['jar','inc','jacket','cat']
                },
                {
                    id:11,letter:'K' ,word:['kitten','lemon','bear','night']
                },
                {
                    id:12,letter:'L' ,word:['letter','inc','bear','lion']
                },
                {
                    id:13,letter:'M' ,word:['jar','mouse','bear','mother']
                },
                {
                    id:14,letter:'N' ,word:['ox','cat','nose','number']
                },
                {
                    id:15,letter:'O' ,word:['bee','ox','bear','on']
                },
                {
                    id:16,letter:'P' ,word:['jar','pear','bear','pine']
                },
                {
                   id:17, letter:'Q' ,word:['queen','inc','quote','lion']
                },
                {
                    id:18,letter:'R' ,word:['red','inc','rabbit','lion']
                },
                {
                    id:19,letter:'S' ,word:['song','inc','small','lion']
                },
                {
                    id:20,letter:'T' ,word:['jar','tree','bear','tears']
                },
                {
                    id:21,letter:'U' ,word:['pear','inc','unit','lion']
                },
                {
                    id:22,letter:'V' ,word:['jar','vow','bear','vine']
                },
                {
                    id:23,letter:'W' ,word:['war','vow','women','vine']
                },
                {
                    id:24,letter:'X' ,word:['xbox','xanax','bear','vine']
                },
                {
                    id:25,letter:'Y' ,word:['jar','young','bear','yellow']
                },
                {
                    id:26,letter:'Z' ,word:['zebra','vow','zoo','vine']
                },
            ]
        }
    },
}
</script>
<style scoped>
ul{
    list-style: none;
    display:flex;
}
li{
    box-shadow: 0 2px 8px rgb(163, 128, 128);
    border-radius: 30px;
    padding:.5rem;
    margin:.5rem;
}
section{
    display: inline-block;
   margin: 1rem auto ;
    

}

</style>