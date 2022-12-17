export default () => ({
  show: false,

  init() {
    this.$nextTick(() => (this.show = true))
    setTimeout(() => this.transitionOut(), 4000)
  },

  transitionOut() {
    this.show = false
    setTimeout(() => this.remove(this.notification), 500)
  },
})
