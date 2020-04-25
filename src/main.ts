import Vue from 'vue';
import Unicon from './unicons';

// third-party styles - see CONTRIBUTING.md
import 'bulma/css/bulma.css';
import 'animate.css';
import 'tippy.js/dist/tippy.css';

// launch pad global styles
import './styles/global.scss';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(Unicon);

new Vue({
  render: h => h(App),
}).$mount('#app');
