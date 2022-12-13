import Splide from '@splidejs/splide'

export default () => ({
    init() {
        new Splide(this.$refs.slider, {
            type: 'slider',
            gap: 28,
            perPage: 3,
            perMove: 1,
            arrows: true,
            pagination: false,
            breakpoints: {
                1024: {
                    perPage: 3,
                    gap: 20,
                },
                768: {
                    perPage: 2,
                    gap: 16,
                },
                560: {
                    perPage: 1,
                    gap: 16,
                },
            },
        }).mount()
    },
})
