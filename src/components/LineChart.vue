<script>
import { Line } from 'vue-chartjs'
// import moment from 'moment'
// import axios from 'axios'
import client from '../api/api'

export default {
  extends: Line,
  props: {
    msg: String
  },
  methods: {
    getdata: async () => {
      return client.get('/logs')
    }
  },
  mounted () {
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'Data',
          backgroundColor: '#f87979',
          borderWidth: 1,
          data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
        }
      ]
    })
  }
}
</script>

<style scoped>
</style>
