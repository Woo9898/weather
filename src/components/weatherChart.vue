<template>
  <div>
    <canvas ref="myChart"></canvas>
  </div>
</template>
<script>
import Chart from 'chart.js/auto';
export default {
  methods: {
    createTypedChart() {
      var ctx = this.$refs.myChart;
      if (this.$data._chart) {
        this.$data._chart.destroy();
      }
      this.$data._chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: this.$store.state.weatherTmp.map(y => y.fcstTime),
          datasets: [{
            label: '기온',
            data: this.$store.state.weatherTmp.map(y => y.fcstValue),
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        },
      })
    },
    //그래프 갱신 시 삭제 후 다시 그리도록
    destroyChart() {
      if (this.$data._chart) {
        this.$data._chart.destroy();
      }
    }
  },
  computed: {
    check_Tmp() {
      return this.$store.state.weatherTmp;
    }
  },
  watch: {
    check_Tmp() {
      console.log('그래프 갱신')
      this.destroyChart();
      this.createTypedChart();
    }
  }
}
</script>

<style></style> 