<template>
    <li  @click="send">
      <div :class="color">
        <label for="number" >
            <strong>{{number}}</strong>
        </label>
      </div>
        
    </li>
</template>
<script>

export default{
    props:['number','color'],
    emits:['send'],
 methods:{
send(){
    this.$emit('send',this.number)
}
 }
  
}
</script>
<style scoped>
li{
    box-shadow: 0 2px 8px rgba(219, 81, 81, 0.3);
    border-radius: 13px;
    max-width: 8rem;
    max-height: 8rem;
    text-align: center;
    display: inline;
    padding: 1rem ;
    margin: .5rem;
    background-color: white;
}
label{
    font-size: xx-large;
    font-weight: 3600;
    font-style: bold;
    font-family: 'Times New Roman', Times, serif;
}

.blue{
    color:blue
}
.red{
    color:red
}
.yallow{
    color:yellow
}
.green{
    color:rgb(0, 9, 128)
}
.pink{
    color: pink;
}
.purple{
    color:purple
}
.brown{
    color:brown
}
.nine{
    color:rgb(219, 71, 187)
}
.mix{
    color:rgb(95, 231, 54)
}
.gray{
    color:gray
}
@media only screen and (max-width: 700px){
    li{
        max-width: 2rem;
        max-height: 2rem;
        margin: .3rem;
        box-shadow: 0;
       padding: .7rem;
    }
    label{
        font-size: large;
    }
    
}
</style>