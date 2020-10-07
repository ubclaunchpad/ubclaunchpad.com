import { createApp } from 'vue';
import VueFathomPlugin from '@ubclaunchpad/vue-fathom';
import VueUnicons from './unicons';

// third-party styles - see CONTRIBUTING.md
import 'bulma/css/bulma.css';
import 'animate.css';
import 'tippy.js/dist/tippy.css';

// launch pad global styles
import './styles/global.scss';

// components
import App from '@/App.vue';

// polyfills for certain features
import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();

const dotcom = createApp(App);

// load fathom plugin
dotcom.use(VueFathomPlugin, {
  siteID: 'FTSSPSGR',
  disabled: (process.env.NODE_ENV !== 'production'),
  settings: {
    url: 'https://chinchilla.ubclaunchpad.com/script.js',
    excludedDomains: ['localhost'],
  },
});

// load icons
dotcom.use(VueUnicons);

// Needs vue-3 support: https://github.com/hilongjw/vue-lazyload/issues/439
// import VueLazyload from 'vue-lazyload';
// dotcom.use(VueLazyload);

// init vue app
dotcom.mount('#app');
