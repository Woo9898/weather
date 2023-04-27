<template>
  <div>
    <canvas ref="myChart2"></canvas>
  </div>
</template>
<script>
import Chart from 'chart.js/auto';
export default{
  methods: {
    createTypedChart() {
      console.log(this)
      var ctx = this.$refs.myChart2;
      if (this.$data._chart) {
        this.$data._chart.destroy();
      }
      this.$data._chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: this.$store.state.weatherPop.map(y => y.fcstTime),
          datasets: [{
            label: '강수확률',
            data: this.$store.state.weatherPop.map(y => y.fcstValue),
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
    check_Pop() {
      return this.$store.state.weatherTmp;
    }
  },
  watch: {
    check_Pop() {
      console.log('그래프 갱신')
      this.destroyChart();
      this.createTypedChart();
    }
  }
}
</script>

<style></style> 