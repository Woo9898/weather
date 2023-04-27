import {getDustInfo, getWeatherInfo} from '../api/index.js'

export default {
  fetchDustInfo(context, selCity) {
    getDustInfo(selCity)
      .then((res) =>
        context.commit("setDustInfo", res.data.response.body.items[0])
      )
      .catch((error) => console.log(error));
  },
  // eslint-disable-next-line
  async fetchWeatherInfo(context, selCity) {
    try{
      // 여기서 선택된 도시의 좌표를 결정하고
      // 해당 좌표를 cityPoint로 {x, y}
      let cityPoint_list = {
        '서울': { 'x': 60, 'y': 127 },
        '부산': { 'x': 97, 'y': 74 },
        '대구': { 'x': 89, 'y': 90 },
        '인천': { 'x': 54, 'y': 125 },
        '광주': { 'x': 58, 'y': 74 },
        '대전': { 'x': 67, 'y': 100 },
        '울산': { 'x': 102, 'y': 84 },
        '경기': { 'x': 60, 'y': 120 },
        '강원': { 'x': 73, 'y': 134 },
        '충남': { 'x': 68, 'y': 100 },
        '충북': { 'x': 69, 'y': 107 },
        '전남': { 'x': 51, 'y': 67 },
        '전북': { 'x': 63, 'y': 89 },
        '경남': { 'x': 91, 'y': 77 },
        '경북': { 'x': 89, 'y': 91 },
        '제주': { 'x': 52, 'y': 38 },
        '세종': { 'x': 66, 'y': 103 },
      };

      
      let cityPoint = cityPoint_list[selCity];

      
      var res = await getWeatherInfo(cityPoint.x, cityPoint.y)
      context.commit("setWeatherInfo", res.data.response.body.items.item)
      //기온정보 설정
      context.commit("setWeatherSubData");
      // //강수형태 설정
      // context.commit("setWeatherPty");
      // //강수확률 설정
      // context.commit("setWeatherPop");
      return res;
    }catch(error){
      console.log(error);
    }
    
    
  },
};