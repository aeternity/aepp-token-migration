import { QrcodeReader } from 'vue-qrcode-reader'

export default {
  components: { QrcodeReader },
  data: function () {
    return {
      scanner: true,
      scannerError: false,
      paused: false
    }
  },
  methods: {
    onDecode (content) {
      this.$store.commit('setWalletAddress', content)
      this.paused = true
      this.scanner = false
    },
    closeScanner (goTo) {
      this.$store.commit('setWalletAddress', null)
      this.paused = true
      this.scanner = false
      this.$router.push({ name: goTo })
    },
    toggleRescan () {
      this.$store.commit('setWalletAddress', null)
      this.paused = false
      this.scanner = true
    },
    async onInit (promise) {
      try {
        await promise
      } catch (error) {
        this.scanner = false
        this.paused = true
        if (error.name === 'NotFoundError') {
          this.scannerError = 'Address scan works only on devices with Camera'
          return
        }
        if (error.name === 'NotAllowedError') {
          this.scannerError = 'You need to give permission to access the camera to proceed with scanning'
          return
        }
        this.scannerError = 'Sorry, we couldn\'t open the camera. Please check if everything is okay with your Camera device'
      }
    }
  }
}
