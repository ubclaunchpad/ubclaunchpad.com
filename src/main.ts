import Vue from 'vue';
import VueGtag from 'vue-gtag';
import Unicon from './unicons';

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

Vue.config.productionTip = false;

Vue.use(VueGtag, {
  config: { id: 'UA-63529563-1' },
});
Vue.use(Unicon);

new Vue({
  render: h => h(App),
}).$mount('#app');
