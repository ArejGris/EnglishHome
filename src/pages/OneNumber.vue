<template>
<li :class="color" @click="$emit('send',this.number)">
    <div  class="container" >
    <label for="letter" >{{number}}</label>
</div>
</li>
</template>
<script>
export default{
    emits:['send'],
    props:['number','color'],
  
  
}</script>
<style scoped>
a{
    text-decoration: none;
}
li{
    border:1px solid inherit;
    border-radius: 15px;
    padding: .2rem;
    margin-right: 1.2rem;
    background-color: white;
    
    box-shadow:1px solid gray;
}
    .container{
        border-radius: 15px;
    max-width: 10rem;
    max-height: 10rem;
    text-align: center;
    display: inline;
    padding: 1rem ;
 
    color: white;
}
label{
    font-size: xx-large;
    font-weight: 3600;
    font-style: bold;
    font-family: 'Times New Roman', Times, serif;
}
.light{
    
    background-color:rgb(255, 174, 0);
    border-color: rgb(255, 153, 0);
}
.blue{
    background-color:blue;
    border-color: blue;
}
.red{
    background-color:red;
    border-color: red;
}
.yellow{
    background-color:yellow;
    border-color:yellow;
}
.green{
    background-color:rgb(0, 9, 128);
    border-color:rgb(0, 9, 128)
}
.pink{
    background-color: pink;
    border-color:pink
}
.purple{
    background-color:purple;
    border-color:purple
}
.brown{
    background-color:brown;
    border-color:brown
}
.nine{
    background-color:rgb(219, 71, 187);
    border-color:rgb(219, 71, 187);
}
.mix{
    background-color:rgb(95, 231, 54);
    border-color: green;
}
.gray{
    background-color:gray;
    border-color:gray
}
@media only screen and (max-width:700px){
    .container{
        max-width: 2rem;
        max-height: 2rem;
        padding:.5rem;
    }
    li{
        margin-right: .5rem;
    }
}
</style>