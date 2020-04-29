import Vue from 'vue';
import VueGtag from 'vue-gtag';
import VueLazyload from 'vue-lazyload';
import VueUnicons from './unicons';

// third-party styles - see CONTRIBUTING.md
import 'bulma/css/bulma.css';
import 'animate.css';
import 'tippy.js/dist/tippy.css';

// launch pad global styles
import './styles/global.scss';
import App from './App.vue';

// polyfills for certain features
import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();

// load vue plugins
Vue.use(VueGtag, {
  config: { id: 'UA-63529563-1' },
});
Vue.use(VueLazyload);
Vue.use(VueUnicons);

// set up vue configuration
Vue.config.productionTip = false;
Vue.config.errorHandler = function(err, vm, info) {
  vm.$gtag.exception({ description: JSON.stringify({ err, info }) });
};

// init vue app
new Vue({
  render: h => h(App),
}).$mount('#app');
