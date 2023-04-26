<template>
  <div>
    <page-header></page-header>
    <select-city></select-city>
    <!-- <ul>
      <li v-for="(tmp, index) in getTmp" v-bind:key="index">
        <div>
          날짜: {{ tmp.fcstDate }}
        </div>
        <div>
          시간: {{ tmp.fcstTime }}
        </div>
        <div>
          기온: {{ tmp.fcstValue }}
        </div>
      </li>
    </ul> -->
    <weather-chart></weather-chart>
  </div>
</template>

<script>
import PageHeader from '../components/pageHeadForWeather.vue'
import SelectCity from '../components/selectCity.vue'
import { mapGetters } from 'vuex';
import WeatherChart from '../components/weatherChart.vue'
export default {
    
    components:{
        PageHeader,
        SelectCity,
        WeatherChart
    },
    computed:{
      ...mapGetters([
        'getWeather', 
        'getTmp'
    ])
    }
}
</script>

<style>

</style>