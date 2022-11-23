<template>
    <div>
        <ul :class="color">
            <li>
               <strong> {{n1}}</strong>
            </li>
            <li>
                <strong>{{n2}}</strong>
            </li>
        </ul>
    </div>
</template>
<script>
export default{
    props:['n1','n2','color'],
   

}
</script>
<style scoped>

ul{
    list-style: none;
    display: flex;
}
ul li{
    box-shadow: 0 2px 8px rgba(0,0,0,.4);
    border-radius: 40px;
    margin-right:1rem;
    padding: .5rem;
    font-weight: bolder;
    font-size: xx-large;
}

.blue{
    color:blue
}
.red{
    color:red
}
.yellow{
    color:rgb(230, 230, 27)
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
.light{
    color:rgb(248, 177, 95)
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
</style>