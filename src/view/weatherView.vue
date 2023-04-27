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
    <weather-tmpchart></weather-tmpchart>
    <weather-popchart></weather-popchart>
  </div>
</template>

<script>
import PageHeader from '../components/pageHeadForWeather.vue'
import SelectCity from '../components/selectCity.vue'
import { mapGetters } from 'vuex';
import WeatherTmpchart from '../components/weatherTmpChart.vue'
import WeatherPopchart from '../components/weatherPopChart.vue'
export default{
    
    components:{
        PageHeader,
        SelectCity,
        WeatherTmpchart,
        WeatherPopchart
    },
    computed:{
      ...mapGetters([
        'getWeather', 
        'getTmp',
        'getPty',
        'getPop'
    ])
    }
}
</script>

<style>

</style>