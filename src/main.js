import { createApp } from 'vue'
import App from './App.vue'
import Contacts from './Contacts.vue'
import Delivery from './Delivery.vue'
import './assets/fontawesome-free/css/all.min.css'
import './assets/icofont/icofont.min.css'
import './index.css'

createApp(App).mount('#app')
createApp(Contacts).mount('#contacts')
createApp(Delivery).mount('#delivery')

