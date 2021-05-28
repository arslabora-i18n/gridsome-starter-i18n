// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue';

export default function (Vue, { appOptions, router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  appOptions.i18n.setLocaleMessage('en', require('./locales/en-us.js'));
  appOptions.i18n.setLocaleMessage('it', require('./locales/it-it.js'));
  appOptions.i18n.setLocaleMessage('pt', require('./locales/pt-br.js'));
}
