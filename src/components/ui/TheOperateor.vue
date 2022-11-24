<template>
    <button @click="$emit('clicked',this.op)">{{op}}</button>
</template>
<script>
export default{
    props:['op']
}</script>
<style scoped>
button,a{
    text-decoration: none;
    border-radius: 50px;
    padding:.5rem;
    background-color: white;
    color:rgb(141, 12, 141);
    font:inherit;
    margin-right:1rem ;
    box-shadow: 0 1px 8px rgba(250, 242, 242, 0.3);
    cursor: pointer;
    display: flex;
}
a:hover,button:hover{
    background-color: rgb(222, 204, 240);
}

</style>
