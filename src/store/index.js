
import {createStore} from 'vuex';
import numberModule from './modules/number.js';
const store=createStore({
    modules:{
        counter:numberModule,

    }
   
});
export default store;