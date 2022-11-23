
import {createStore} from 'vuex';
import numberModule from './modules/number.js';
import AuthModule from './modules/Auth.js'
const store=createStore({
    modules:{
        counter:numberModule,
        auth:AuthModule

    }
   
});
export default store;