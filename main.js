import Vue from 'vue'
import App from './App'
import textView from './components/textView.vue';
import itemList from './components/itemList.vue';
Vue.component('textView', textView);
Vue.component('itemList', itemList);



Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
