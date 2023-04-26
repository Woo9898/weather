
import Vue from "vue";
import Vuex from "vuex";
import actions from "./actions.js";
import mutations from "./mutations.js";
Vue.use(Vuex);


export const store = new Vuex.Store({
  state: {
    weatherData: [], //전체 날씨 정보
    weatherTmp: [], //기온 정보
    airQuality: {},
  },
  getters: {
    getDust(state) {
      return state.airQuality;
    },
    getWeather(state) {
      return state.weatherData;
    },
    getTmp(state) {
      return state.weatherTmp;
    },
  },
  mutations,
  actions,

});
