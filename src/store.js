import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    newCharacter: {
      basicData: {
        name: "",
        age: "",
        sex: "",
        race: "human"
      }
    }
  },
  mutations: {
    basicData(state, aBasicData) {
      state.newCharacter.basicData = aBasicData;
    }
  },
  actions: {}
});
