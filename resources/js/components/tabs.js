export default () => ({
    selectedId: null,

    init() {
        // Set the first available tab on the page on page load.
        this.$nextTick(() => this.select(this.$id('tab', 1)))
    },

    select(id) {
        this.selectedId = id
    },

    isSelected(id) {
        return this.selectedId === id
    },

    whichChild(el, parent) {
        return Array.from(parent.children).indexOf(el) + 1
    },
})
