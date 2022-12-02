export default () => ({
    showNav: false,
    activeParent: null,

    init() {
        this.resizeEvent()
    },

    toggleNav() {
        this.showNav = !this.showNav
        this.overflowClass()
    },

    resizeEvent() {
        this.showNav = window.innerWidth > 1024 ? true : false
        this.overflowClass()
    },

    overflowClass() {
        const html = document.querySelector('html')
        const body = document.querySelector('body')

        if (this.showNav && window.innerWidth <= 1024) {
            html.classList.add('overflow-hidden')
            body.classList.add('overflow-hidden')
        } else {
            html.classList.remove('overflow-hidden')
            body.classList.remove('overflow-hidden')
        }
    },
})
