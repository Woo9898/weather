export default {
  setDustInfo(state, dustData) {
    state.airQuality = dustData;
  },
  setWeatherInfo(state, weatherData) {
    state.weatherData = weatherData;
  },
  setWeatherSubData(state) {
    state.weatherTmp = [];
    state.weatherPty = [];
    state.weatherPop = [];
    var ptyCode = '';

    for (var i = 0; i < state.weatherData.length; i++) {
      //온도
      if (state.weatherData[i].category === "TMP") {
        state.weatherTmp.push(state.weatherData[i]);
      }
      //강수형태
      else if(state.weatherData[i].category === "PTY"){
        if(state.weatherData[i].fcstValue == 0){
          ptyCode = '없음'
        }
        else if(state.weatherData[i].fcstValue == 1){
          ptyCode = '비'
        }
        else if(state.weatherData[i].fcstValue == 2){
          ptyCode = '비/눈'
        }
        else if(state.weatherData[i].fcstValue == 3){
          ptyCode = '눈'
        }
        else if(state.weatherData[i].fcstValue == 4){
          ptyCode = '소나기'
        }
        state.weatherPty.push(ptyCode);
      }
      //강수 확률
      else if (state.weatherData[i].category === "POP") {
        state.weatherPop.push(state.weatherData[i]);
      }
    }
  },
 
};