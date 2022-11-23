export default{
    state(){
    return{
       
        isAuth:false,
    }
    },
    mutations:{
        
        isAuth(state,payload){
            state.isAuth=payload.value;
        }
    },
    getters:{
        isAuth(state){
            return state.isAuth;
        }
        
    },
    actions:{
    login(context){
        context.commit('isAuth',{value:true});

    },
    logout(context){
        context.commit('isAuth',{value:false});

    }
    },
}