import VueModal from './src/main.js';
import Vue from 'vue';
Vue.$modal = Vue.prototype.$modal = VueModal;
export default VueModal;