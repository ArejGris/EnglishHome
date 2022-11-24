<template>
    <transition>
        <li v-if="show">
<div class="container" :class="color">
    <strong>{{letter}}</strong>
</div>

<ul>
    <base-badge v-for="word in words"
    :key="word"
    :id="word"
    >{{word}}</base-badge>
    </ul>
    <div>
    </div>
</li>
    </transition>

</template>
<script>

export default{
    props:['id','letter','words','color'],
   computed:{
show(){
    return this.$store.getters.letter===this.letter
}
   },
methods:{

},
provide(){
    return{
letter:this.letter
    }
}
}
</script>
<style scoped>
li{
    display: block;
}
.container{
    box-shadow: 0 2px 8px rgba(0,0,0,.7);
    border-radius: 30px;
    padding: 1rem;
    display: inline-block;
    margin:1rem;
    max-width: 6rem;
    max-height: 4rem;
    font-size: xx-large;
    text-align: center;
    
}
.A,.T{
    color:red
}
.B,.U{
    color:blue
}
.C,.X{
    color:pink
}
.D,.V{
    color:blueviolet
}
.E,.W{
    color:yellow
}
.F,.Y{
    color:rgb(207, 36, 184)
}
.G{
    color:brown
}
.H,.S{
    color:green
}
.I,.Z{
    color:rgb(18, 150, 150)
}
.J,.R{
color:rgb(184, 218, 36)
}
.K,.Q{
color:rgb(0, 255, 55)
}
.L,.N{
color:rgb(149, 33, 216)
}
.M,.O{
color: rgb(240, 34, 34);
}
.v-enter-active{
    animation: b 1s ease-out;
}

@keyframes b{
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}

</style>