import { createApp } from 'vue'
// import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";


createApp(App).use(router).mount('#app')

// new Vue({
//     router,
//     store,
//     render: h => h(App)
//   }).$mount("#app");
