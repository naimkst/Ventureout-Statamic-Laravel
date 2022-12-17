import Splide from '@splidejs/splide'

export default () => ({
    init() {
        new Splide(this.$refs.slider, {
            type: 'slider',
            perPage: 1,
            perMove: 1,
            arrows: false,
            autoplay: true,
            pagination: true,
        }).mount()
    },
})
