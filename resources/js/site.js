import Alpine from 'alpinejs'
import persist from '@alpinejs/persist'
import collapse from '@alpinejs/collapse'
import focus from '@alpinejs/focus'

import header from './components/header.js'
import marquee from './components/marquee.js'
import tabs from './components/tabs.js'
import serviceSlider from './components/service-slider'
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
Alpine.data('heroSlider', heroSlider)
Alpine.data('gallery', gallery)

// Init
window.Alpine = Alpine

console.log('Loaded!')

Alpine.start()
