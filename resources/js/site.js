import Alpine from 'alpinejs'
import persist from '@alpinejs/persist'
import collapse from '@alpinejs/collapse'
import focus from '@alpinejs/focus'

import header from './components/header.js'
import marquee from './components/marquee.js'
import tabs from './components/tabs.js'
import serviceSlider from './components/service-slider'
import tripAdvisorSlider from './components/trip-advisor'
import heroSlider from './components/hero-slider'
import gallery from './components/gallery'

// Plugins
Alpine.plugin(persist)
Alpine.plugin(collapse)
Alpine.plugin(focus)

// Components
Alpine.data('header', header)
Alpine.data('marquee', marquee)
Alpine.data('tabs', tabs)
Alpine.data('serviceSlider', serviceSlider)
Alpine.data('tripAdvisorSlider', tripAdvisorSlider)
Alpine.data('heroSlider', heroSlider)
Alpine.data('gallery', gallery)

// Init
window.Alpine = Alpine

Alpine.start()

// addEventListener('scroll', (event) => {
//     console.log(window.scrollY)

//     if (window.scrollY >= 450) {
//         var d = document.getElementById('fixCat')
//         return d.classList.add('fix-cat')
//     }
//     if (window.scrollY < 450) {
//         var d = document.getElementById('fixCat')
//         return d.classList.remove('fix-cat')
//     }
// })
