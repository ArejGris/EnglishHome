<template>
    <header >
        <nav>
            <h1><router-link to="/">MY ENGLISH HOME</router-link></h1>
            <ul>
            <li>
                <router-link to="/">letters</router-link>

            </li>
            <li>
                <router-link to="/test">numbers</router-link>
            </li>
            <li>
                <router-link  to="/numbers">calculator</router-link>
            </li>
            <li class="dropdown">
                <button href="javascript:void(0)" class="dropbtn">menu</button>
                <div class="dropdown-content">
                    <router-link to="/numbers">numbers</router-link>
                    <router-link to="/">letters</router-link>
                    <router-link to="/test">calc</router-link>

                </div>
            </li>
        </ul>

        </nav>
        
    </header>
</template>
<style scoped>

header{
    width: 100%;
    height: 5rem;
    display: flex;
    background-color:rgb(87, 243, 252);
    justify-content: center;
    align-items: center;
    margin-top: 0;
    margin-bottom: 1rem;
}
header nav{
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
header ul{
    list-style: none;
    font:inherit;
    margin:0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
header a{
    text-decoration: none;
    color:#f391e3;
    display: inline-block;
    padding: .75rem 1.5rem;
    border:1px solid transparent;
}
a:active,
a:hover,
a.router-active-link{
    border:1px solid #f343d6;
}
h1{
    margin: 0 ;

}
h1 a{
    color :white;
    margin: 0;
}
h1 a:hover{
    color:#f343d6;
    border:1px solid #f343d6;
}
li a, .dropbtn{
    display: inline-block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}
li a:hover,.dropdown:hover .dropbtn{
    background-color: rgb(255, 0, 221);
}
li.dropdown{
    display: inline-block;
}
.dropdown-content{
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width:160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,.2);
    z-index: 1;
}
.dropdown-content a{
    color:black;
    padding:12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
}
.dropdown-content a:hover{
    background-color: #f1f1f1;
}
.dropdown:hover .dropdown-content{
    display: block;
}

</style>