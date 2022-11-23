<template>
<li :class="color" @click="$emit('send',this.letter)">
<strong>{{letter}}</strong>
</li>
</template>
<script>
export default{
    props:['letter','color'],
emits:['send']
}
</script>
<style scoped>
li{
    box-shadow: 0 2px 8px rgb(163, 128, 128);
    border-radius: 30px;
    padding:.5rem;
    font-size: larger;
    margin:.5rem;
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
</style>