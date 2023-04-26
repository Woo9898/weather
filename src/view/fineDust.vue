<template>
  <div class="total">
    <pageHeadForDust></pageHeadForDust>
    <select-city></select-city>
    <div>위치: {{ getDust.sidoName }} / 측정장소: {{ getDust.stationName }}</div>
    <div>측정시각: {{ getDust.dataTime }}</div>
    <div>미세먼지 농도: {{ getDust.pm10Value}}</div>
    <div>초미세먼지 농도: {{ getDust.pm25Value }}</div>
  </div>
  
</template>

<script>
import pageHeadForDust from '../components/pageHeadForDust';
import SelectCity from '../components/selectCity';
import { mapGetters } from 'vuex';
export default {
  components: {
    pageHeadForDust,
    SelectCity
  },
  computed:{
    ...mapGetters([
      'getDust'
    ])
  }
  
}
</script>

<style scoped>
.total{
  padding: 0;
  margin: 0;
  
  
}
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  border-style: inset ;
}

.select-container {
  display: flex;
  align-items: left;
  justify-content: left;
  margin: 5px 150px 5px 10px;
}
.city-container {
  display: flex;
  align-items: center;
  justify-content: center
  
}

.select-city {
}

.selected-city {
  font-size: 20px;
  font-weight: bold
}

.dust-info {
  font-size: 24px;

}
</style>