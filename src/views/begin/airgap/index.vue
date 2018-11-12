<template>
  <app-view>
    <app-header>
      <app-header-nav prog="2/6" text="Create an æternity account with AirGap"/>
    </app-header>
    <app-view container>
      <app-intro>
        <template slot="title">
          Create an æternity <br/> account with AirGap
        </template>
        <router-link to="/migration">
          <ae-button face="round" fill="secondary">
            I already have an account
          </ae-button>
        </router-link>
      </app-intro>
      <div class="tutorial-wrapper">
        <div class="tutorial">
          <figure class="tutorial__img" v-if="!isMobile">
            <img :src="require('@/assets/images/tutorial-airgap/0-download-install.svg')" alt="Download & Install">
          </figure>
          <section class="tutorial__info">
            <h3 class="title title-category">Download & Install AirGap Vault app</h3>
            <p>
              Go to the App Store or the Play Store and download the <b>AirGap Vault App</b>.
              For maximum security we recommend using a dedicated smartphone to
              store your AE tokens. <a href="#" target="_blank">Learn More »</a>
            </p>
            <footer>
              <a href="https://itunes.apple.com/us/app/airgap-vault-secure-secrets/id1417126841" target="_blank">
                <img
                  :src="require('@/assets/graphics/apple-store.svg')"
                  alt="Apple Store"
                  title="Go to Apple Store"
                />
              </a>
              <a href="https://play.google.com/store/apps/details?id=it.airgap.vault" target="_blank">
                <img
                  :src="require('@/assets/graphics/google-play.svg')"
                  alt="Google Play"
                  title="Go to Google Play"
                />
              </a>
            </footer>
          </section>
        </div>
      </div>
      <div class="tutorial-wrapper">
        <app-slider>
          <app-slide-container>
            <div class="tutorial">
              <figure class="tutorial__img" v-if="!isMobile">
                <img :src="require('@/assets/images/tutorial-airgap/1.0-secret-generate.svg')">
              </figure>
              <section class="tutorial__info">
                <h3 class="title title-category">Your secret</h3>
                <h4 class="title title-subcategory">Select ‘Generate’</h4>
                <p>
                  “Generate” a new secret, you can also import an existing mnemonic phrase.
                  We recommend that you generate a new secret on the air gapped device and not
                  import one that was previously used in a device with network connectivity.
                </p>
              </section>
            </div>
          </app-slide-container>
          <app-slide-container>
            <div class="tutorial">
              <figure class="tutorial__img" v-if="!isMobile">
                <img :src="require('@/assets/images/tutorial-airgap/1.1-secret-generate.svg')">
              </figure>
              <section class="tutorial__info">
                <h3 class="title title-category">Your secret</h3>
                <h4 class="title title-subcategory">Generate</h4>
                <p>
                  The enhanced entropy concept adds video, audio, accelerator and touch data
                  to the entropy seed alongside the device’s pre-shipped secure random
                  generator in order to generate a cryptographically secure seed used
                  for the secret generation.
                </p>
              </section>
            </div>
          </app-slide-container>
          <app-slide-container>
            <div class="tutorial">
              <figure class="tutorial__img" v-if="!isMobile">
                <img :src="require('@/assets/images/tutorial-airgap/1.2-secret-write.svg')">
              </figure>
              <section class="tutorial__info">
                <h3 class="title title-category">Your secret</h3>
                <h4 class="title title-subcategory">Write your secret on a piece of paper</h4>
                <p>
                  In order to have a backup of your secret, you need to
                  write the following words on a piece of paper. Remember the rules!
                </p>
              </section>
            </div>
          </app-slide-container>
          <app-slide-container>
            <div class="tutorial">
              <figure class="tutorial__img" v-if="!isMobile">
                <img :src="require('@/assets/images/tutorial-airgap/1.3-secret-verify.svg')">
              </figure>
              <section class="tutorial__info">
                <h3 class="title title-category">Your secret</h3>
                <h4 class="title title-subcategory">Verify your secret</h4>
                <p>
                  Verify the secret you wrote down on a piece of paper,
                  by ordering the mnemonic words in the right order.
                </p>
              </section>
            </div>
          </app-slide-container>
          <app-slide-container>
            <div class="tutorial">
              <figure class="tutorial__img" v-if="!isMobile">
                <img :src="require('@/assets/images/tutorial-airgap/1.4-secret-name.svg')">
              </figure>
              <section class="tutorial__info">
                <h3 class="title title-category">Your secret</h3>
                <h4 class="title title-subcategory">Security level & secret name</h4>
                <p>
                  Use your fingerprint to store the secret in the secure
                  enclave of the mobile device, set a password and
                  confirm it for additional security.
                </p>
              </section>
            </div>
          </app-slide-container>
        </app-slider>
      </div>
      <div class="tutorial-wrapper">
        <app-slider>
          <app-slide-container>
            <div class="tutorial">
              <figure class="tutorial__img" v-if="!isMobile">
                <img :src="require('@/assets/images/tutorial-airgap/2.0-wallet-generate.svg')">
              </figure>
              <section class="tutorial__info">
                <h3 class="title title-category">Your Wallet</h3>
                <h4 class="title title-subcategory">Add a new wallet</h4>
                <p>
                  A wallet consists of the public address and the derivation path of a specific coin.
                </p>
              </section>
            </div>
          </app-slide-container>
          <app-slide-container>
            <div class="tutorial">
              <figure class="tutorial__img" v-if="!isMobile">
                <img :src="require('@/assets/images/tutorial-airgap/2.1-wallet-select.svg')">
              </figure>
              <section class="tutorial__info">
                <h3 class="title title-category">Your Wallet</h3>
                <h4 class="title title-subcategory">Select ‘æternity’</h4>
                <p>
                  For the purpose of migrating to the Mainnet, we
                  will create an æternity account. Select ‘Add Wallet’.
                </p>
              </section>
            </div>
          </app-slide-container>
          <app-slide-container>
            <div class="tutorial">
              <figure class="tutorial__img" v-if="!isMobile">
                <img :src="require('@/assets/images/tutorial-airgap/2.2-wallet-select.svg')">
              </figure>
              <section class="tutorial__info">
                <h3 class="title title-category">Your Wallet</h3>
                <h4 class="title title-subcategory">Select the newly added æternity wallet</h4>
                <p>
                  In order to have a backup of your secret, you need
                  to write the following words on a piece of paper. Remember the rules!
                </p>
              </section>
            </div>
          </app-slide-container>
          <app-slide-container>
            <div class="tutorial">
              <figure class="tutorial__img" v-if="!isMobile">
                <img :src="require('@/assets/images/tutorial-airgap/2.3-wallet-qr.svg')">
              </figure>
              <section class="tutorial__info">
                <h3 class="title title-category">Your Wallet</h3>
                <h4 class="title title-subcategory">Select the æternity wallet</h4>
                <p>
                  In order to provide your new æternity address in the next step.
                </p>
              </section>
            </div>
          </app-slide-container>
        </app-slider>
      </div>
    </app-view>
    <app-footer>
      <router-link to="/migration">
        <ae-button face="round" fill="primary" shadow>
          Start Migration
        </ae-button>
      </router-link>
    </app-footer>
  </app-view>
</template>
<script>
import AeButton from '@aeternity/aepp-components/dist/ae-button'

import AppIntro from '../../../components/app-intro.vue'
import AppSlider from '../../../components/app-slider.vue'
import AppSlideContainer from '../../../components/app-slide-container.vue'

export default {
  name: 'begin-airgap',
  components: {
    AeButton,
    AppSlider,
    AppSlideContainer,
    AppIntro
  },
  data () {
    return {
      open: false,
      windowWidth: window.innerWidth
    }
  },
  computed: {
    isMobile () {
      return this.windowWidth <= 768
    }
  },
  mounted () {
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
    })
  }
}
</script>
<style lang="scss" scoped>
.tutorial-wrapper {
  position: relative;
  z-index: 1;
  margin-bottom: $spacer-xl;
  width: 100%;

  @include only-phone {
    box-shadow: $shadow_wide;
    background-color: $bg-color_light;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
    &:not(:last-child):after {
      content: '';
      display: block;
      width: 2px;
      height: $spacer-xl;
      background-color: $magenta;
      position: absolute;
      bottom: -$spacer-xl;
      left: 50%;
      transform: translate(-50%);
    }
  }

  @include tablet-and-desktop {
    margin-left: -7%;

    &:after {
      content: '';
      box-shadow: $shadow_wide;
      background-color: $bg-color_light;
      display: block;
      position: absolute;
      margin: 1rem;
      top: 0;
      height: 100%;
      width: 100%;
      top: 10%;
      left: 10%;
      height: 90%;
      width: 90%;
      z-index: -1;
    }
  }
}

.tutorial {
  display: flex;
  flex-direction: column;
  justify-content: center;

  &__img {
    width: 50%;
    margin: 0;
    @include tablet-and-desktop {
      width: 100%;
      max-width: 30em;
      height: 26em;
      display: flex;
      justify-content: flex-end;
    }
    & img {
      object-fit: contain;
      object-position: 100% 100%;
    }

  }

  &__info {
    padding: $spacer-xl 0;
    @include tablet-and-desktop {
      width: 50%;
      max-width: 24em;
      margin: auto;
      margin-top: 15%;
    }
    @include only-phone {
      padding: $spacer-xl $spacer-m;
    }
    & footer {
      display: flex;
      margin-top: $spacer-l;
      & a {
        margin-right: $spacer-l;
        @include only-phone {
          width: 45%;
          margin: auto;
        }

      }

    }
  }
}

@include tablet-and-desktop {
  @supports (display: grid) {

    .tutorial {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 40px;

      &__info {
        grid-column-start: 2;
        grid-column-end: 2;
        width: 100%;
      }

      &__img {
        grid-column-start: 1;
        grid-column-end: 2;
        width: 100%;
        display: flex;
        justify-content: flex-end;

        & img {
          object-fit: contain;
        }
      }
    }
  }
}
</style>
