import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userName : '数据'
  },
  mutations : {
    changeUserName( state, msg ){
      state.userName = msg;
    }
  },
  actions:{
    changeUserNameAction({commit},msg){
      commit('changeUserName',msg)
    }
  }

})

export default store
