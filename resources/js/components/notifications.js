export default () => ({
  notifications: [],

  add(e) {
    this.notifications.push({
      id: e.timeStamp,
      type: e.detail.type,
      content: e.detail.content,
    })
  },

  remove(notification) {
    this.notifications = this.notifications.filter(
      (i) => i.id !== notification.id
    )
  },
})
