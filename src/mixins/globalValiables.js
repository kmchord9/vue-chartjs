import axios from 'axios'

export default {
  methods: {
    getdata: async () => {
      var res = await axios.get('http://kmroot.local:3000/')
      console.log(res.data.ADT7410.temp)
      // console.log(Math.random())
      var data = res.data.ADT7410.temp
      return data
    }
  }
}
