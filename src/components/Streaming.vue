<script>
import { Line } from 'vue-chartjs'
import 'chartjs-plugin-streaming'
// import $ from 'jquery'
// import axios from 'axios'

export default {
  extends: Line,
  mounted () {
    this.renderChart({
      datasets: [{
        data: []
      }]
    }, {
      scales: {
        xAxes: [{
          type: 'realtime',
          realtime: {
            delay: 2000,
            refresh: 2000,
            duration: 60000,
            onRefresh: (chart) => {
              chart.data.datasets.forEach(async (dataset) => {
                dataset.data.push({
                  x: Date.now(),
                  y: await this.getdata()
                })
              })
            }
          }
        }],
        yAxes: [{
          ticks: {
            suggestedMax: 40,
            suggestedMin: 20,
            stepSize: 2
          }
        }]
      }
    })
  }
}
</script>
