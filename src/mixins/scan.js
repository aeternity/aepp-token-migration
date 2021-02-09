import { QrcodeStream } from 'vue-qrcode-reader'

export default {
  components: { QrcodeStream },
  data: function () {
    return {
      noRearCamera: false,
      noFrontCamera: false,
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
        const triedFrontCamera = this.camera === 'front'
        const triedRearCamera = this.camera === 'rear'
        const cameraMissingError = error.name === 'OverconstrainedError'
        this.scanner = false
        this.paused = true

        if (triedRearCamera && cameraMissingError) {
          this.noRearCamera = true
          this.camera = 'front'
        }

        if (triedFrontCamera && cameraMissingError) {
          this.noFrontCamera = true
        }

        if (this.noRearCamera && this.noFrontCamera && error.name === 'OverconstrainedError') {
          this.error = 'ERROR: installed cameras are not suitable'

          return
        }

        if (error.name === 'NotAllowedError') {
          this.scannerError = 'You need to give permission to access the camera to proceed with scanning'
          return
        }

        if (error.name === 'NotFoundError') {
          this.scannerError = 'ERROR: no camera on this device'

          return
        }

        if (error.name === 'NotReadableError') {
          this.scannerError = 'ERROR: is the camera already in use?'

          return
        }

        if (error.name === 'StreamApiNotSupportedError') {
          this.scannerError = 'ERROR: Stream API is not supported in this browser'

          return
        }

        this.scannerError = 'Sorry, we couldn\'t open the camera. Please check if everything is okay with your Camera device'
      }
    }
  }
}
