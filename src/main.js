import { createApp } from 'vue'
import App from './App.vue'

//import route untuk digunakan
import router from './router'

//import Bootstrap, Popper, jQuery
import 'bootstrap/dist/css/bootstrap.css'
import 'jquery/dist/jquery.min'
import 'popper.js/dist/popper.min'
import 'bootstrap/dist/js/bootstrap.min'

//import store vuex
import store from './store'

const app = createApp(App)

//use the router
app.use(router)

//use the store from store
app.use(store);

app.mount('#app')
