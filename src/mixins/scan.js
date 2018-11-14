import { QrcodeReader } from 'vue-qrcode-reader'

export default {
  /**
   * Importing QRCode component
   */
  components: { QrcodeReader },
  data: function () {
    return {
      scanner: true, // Is scanner open or not.
      scannerError: false, // Variable to hold errors in the scanner
      paused: false // Is camera enabled or not.
    }
  },
  methods: {
    /**
     * After onDecode the function gets executed
     * and returns the payload from the QR Code
     * @param content
     */
    onDecode (content) {
      this.$store.commit('setWalletAddress', content)
      this.paused = true
      this.scanner = false
    },

    /**
     * Function closes the scanner and pushes
     * the user to a different page if route is provided
     */
    closeScanner (goTo) {
      this.$store.commit('setWalletAddress', null)
      this.paused = true
      this.scanner = false
      this.$router.push({ name: goTo })
    },

    /**
     * Opens the scan feature and resets the wallet
     * address
     */
    toggleRescan () {
      this.$store.commit('setWalletAddress', null)
      this.paused = false
      this.scanner = true
    },

    /**
     * On execution of the QR Code library
     * check if something went wrong
     */
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
