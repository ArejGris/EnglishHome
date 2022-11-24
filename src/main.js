import { createApp } from 'vue';
import { defineAsyncComponent } from 'vue';
import {createRouter,createWebHistory}from 'vue-router';
import App from './App.vue';
import store from './store/index.js';
import BaseBadge from './components/ui/BaseBadge.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseCard from './components/ui/BaseCard.vue';
import TheOperateor from './components/ui/TheOperateor.vue'
//import AllNumber from './pages/AllNumber.vue';
//import AllLetter from './pages/AllLetter.vue';
//import MyNumber from './pages/MyNumber.vue';
//import NumberComponent from './pages/NumberComponent.vue';
const AllLetter=defineAsyncComponent(()=>import('./pages/AllLetter.vue'))
const MyNumber=defineAsyncComponent(()=>import('./pages/MyNumber.vue'))
const AllNumber=defineAsyncComponent(()=>import('./pages/AllNumber.vue'))
const router = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', component: AllLetter },
      { path: '/numbers', component: AllNumber },
      { path: '/letters', component: AllLetter },
      { path: '/test', component: MyNumber 
    }, // our-domain.com/teams => TeamsList
    
    ]
  });
const app=createApp(App);
app.use(router)
app.use(store);
app.component('base-button',BaseButton);
app.component('base-badge',BaseBadge);
app.component('base-card',BaseCard);
app.component('the-operateor',TheOperateor)
app.mount('#app')
