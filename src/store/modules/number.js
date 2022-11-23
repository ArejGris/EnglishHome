export default{
    state(){
        return{
            number:0,
            letter:'A'

        }
    },
    mutations:{
        
        set(state,payload){
            state.number=payload
        }
        ,setLetter(state,payload){
            state.letter=payload
        }


    },
    actions:{
        set(context,payload){
context.commit('set',payload)
        },
        setLetter(context,payload){
            context.commit('setLetter',payload)
                    },
        

    },

    getters:{
       number(state){
            return state.number;

        },
        letter(state){
            return state.letter

        },
        counter(state){
            return state.counter;
        },

    }
}