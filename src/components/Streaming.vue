<script>
import { Line } from 'vue-chartjs'
import 'chartjs-plugin-streaming'
import axios from 'axios'

export default {
  extends: Line,
  props: ['sensorServer', 'divice'],
  methods: {
    getdata: async () => {
      var res = await axios.get('http://kmroot.local:3000/')
      console.log(this.diviceName)
      return res.data.ADT7410.temp
    }
  },
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
