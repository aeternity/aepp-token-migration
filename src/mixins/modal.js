export default {
  data: function () {
    return { modal: false, name: null }
  },
  methods: {
    /**
     * Open Modal
     */
    openModal (name) {
      Object.assign(this.$data, {
        modal: true,
        name
      })
    },

    /**
     * Close Modal
     */
    closeModal () {
      Object.assign(this.$data, {
        modal: false,
        name: null
      })
    }
  }
}
