// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import Icon from 'vue-svg-icon/Icon.vue'
import vuex from 'vuex'
import store from './store/index'

import '../static/style/index.css';

import '../static/style/iconfont/iconfont.css'


import MuseUI from 'muse-ui';
// import 'muse-ui/dist/muse-ui.css';



import Message from 'muse-ui-message';
Vue.use(Message);

import 'muse-ui-loading/dist/muse-ui-loading.css';
import Loading from 'muse-ui-loading';
Vue.use(Loading);


import animate from 'animate.css' 
Vue.use(animate);

Vue.prototype.goBack = (route) => {
	route.animate = 2
	history.go(-1)
}

Vue.use(MuseUI);

import VueVideoPlayer  from 'vue-video-player'
import 'video.js/dist/video-js.css'

Vue.use(VueVideoPlayer );

// import '../static/utils/iconfont.js'

Vue.config.productionTip = false;

import customComponents from './custom-components.js'
Vue.use(customComponents);

new Vue({
	el: '#app',
	router,
	store,
	components: { App },
	template: '<App/>'

})