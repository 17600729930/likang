import Vue from 'vue'
import App from './App'
// import uniRequest from 'uni-request';

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
