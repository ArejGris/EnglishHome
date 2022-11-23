<template>
    <h2>hello world{{counter}}</h2>
</template>
<script>
export default{
    computed:{
        counter(){
            return this.$store.getters.counter;
        }
    }
}
</script>