import Splide from '@splidejs/splide'

export default () => ({
    init() {
        new Splide(this.$refs.slider, {
            gap: '1.125rem',
            height: '400px',
            autoWidth: true,
            type: 'slider',
            perMove: 1,
            arrows: true,
            pagination: false,
        }).mount()
    },
})
