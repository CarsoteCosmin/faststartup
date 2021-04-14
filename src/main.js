import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import VueChatScroll from 'vue-chat-scroll';
Vue.use(VueChatScroll);

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyD1CwxDeBcgJKUJ-1bgayjYMtg-jgWSlbY",
  authDomain: "faststartup.firebaseapp.com",
  databaseURL: "https://faststartup.firebaseio.com",
  projectId: "faststartup",
  storageBucket: "faststartup.appspot.com",
  messagingSenderId: "367167274146",
  appId: "1:367167274146:web:fb7dc1073bc6972bc8abfb",
  measurementId: "G-KG9PNBC10T"
};

let app = '';

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default db;


firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      vuetify,
      router,
      render: function (h) { return h(App) }
    }).$mount('#app')
  }
})

// import Vue from 'vue'
// import App from './App.vue'
// import router from './router'
// import vuetify from './plugins/vuetify';

// import firebase from 'firebase';

// Vue.config.productionTip = false

// const firebaseConfig = {
//   apiKey: "AIzaSyD1CwxDeBcgJKUJ-1bgayjYMtg-jgWSlbY",
//   authDomain: "faststartup.firebaseapp.com",
//   databaseURL: "https://faststartup.firebaseio.com",
//   projectId: "faststartup",
//   storageBucket: "faststartup.appspot.com",
//   messagingSenderId: "367167274146",
//   appId: "1:367167274146:web:fb7dc1073bc6972bc8abfb",
//   measurementId: "G-KG9PNBC10T"
// };

// firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();
// export default db;

// new Vue({
//   router,
//   vuetify,
//   render: function (h) { return h(App) }
// }).$mount('#app')