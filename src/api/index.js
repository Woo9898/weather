import axios from "axios";
import moment from "moment";


function getDustInfo(selCity) {
  return axios.get(
    "https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty",
    {
      params: {
        serviceKey:
          "29NJea7qE8vUg6dNmduspOk+0sYUuuPjoMIT16kREEflOu2BN73d/s+Ycb4NUWiHX2O320aR3WPQxn34wmXOsg==",
        returnType: "json",
        numOfRows: "1",
        pageNo: "1",
        sidoName: selCity,
        ver: "1.0",
      },
    }
  );
}
function getWeatherInfo(pointX, pointY) {
  //금일 날짜 생성
  let today = moment().format("YYYYMMDD");
  let nowTime = moment().format("HHmm");
  let setTime = '';
  
  //시간이 2311 =< =< 2359
  if ('2311' <= nowTime && nowTime <= '2359') {
    setTime = '2300';
  }
  //시간 2011 =< 2310
  else if ('2011' <= nowTime && nowTime <= '2310') {
    setTime = '2000';
  }
  // 1711 2010
  else if ('1711' <= nowTime && nowTime <= '2010') {
    setTime = '1700';
  }
  //1411 1710
  else if ('1411' <= nowTime && nowTime <= '1710') {
    setTime = '1400';
  }
  //1111 1410
  else if ('1111' <= nowTime && nowTime <= '1410') {
    setTime = '1100';
  }
  //0811 1110
  else if ('0811' <= nowTime && nowTime <= '1110') {
    setTime = '0800';
  }
  //0511 0810
  else if ('0511' <= nowTime && nowTime <= '0810') {
    setTime = '0500';
  }
  //0211 0510
  else if ('0211' <= nowTime && nowTime <= '0510') {
    setTime = '0200';
  }
  //0000 0210
  else if ('0000' <= nowTime && nowTime <= '0210') {
    today = moment().subtract(1, "day").format("YYYYMMDD");
    setTime = '2300';
  }
  console.log(today);
  console.log(setTime);

    return axios.get(
      "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst",
      {
        params: {
          serviceKey:
            "29NJea7qE8vUg6dNmduspOk+0sYUuuPjoMIT16kREEflOu2BN73d/s+Ycb4NUWiHX2O320aR3WPQxn34wmXOsg==",
          dataType: "Json",
          base_date: today, //추후 수정
          base_time: setTime,
          numOfRows: "296",
          pageNo: "1",
          nx: pointX,
          ny: pointY,
        },
      }
    );
}

export { getDustInfo, getWeatherInfo };

