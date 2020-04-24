import Vue from 'vue';
import VueGtag from 'vue-gtag';

// third-party styles - see CONTRIBUTING.md
import 'bulma/css/bulma.css';
import 'animate.css';

// launch pad global styles
import './styles/global.scss';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(VueGtag, {
  config: { id: 'TODO' },
});

new Vue({
  render: h => h(App),
}).$mount('#app');
