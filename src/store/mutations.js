export default {
  setDustInfo(state, dustData) {
    state.airQuality = dustData;
  },
  setWeatherInfo(state, weatherData) {
    state.weatherData = weatherData;
  },
  setWeatherTmp(state) {
    state.weatherTmp = [];
    for (var i = 0; i < state.weatherData.length; i++) {
      if (state.weatherData[i].category === "TMP") {
        state.weatherTmp.push(state.weatherData[i]);
      }
    }
  },
};