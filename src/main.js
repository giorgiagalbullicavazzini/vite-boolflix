import { createApp } from 'vue'

// Import CSS   
import './assets/scss/main.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

/* import FontAwesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import FontAwesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import FontAwesome specific icons */
import { faStar as fasStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(fasStar, farStar)

import App from './App.vue'

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
