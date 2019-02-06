<template>
  <app-view>
    <app-header>
      <app-header-nav prog="2/6" text="Create an æternity account with AirGap"/>
    </app-header>
    <app-view container>
      <app-intro spacing>
        <template slot="title">
          Create an æternity account with AirGap
        </template>
        <router-link :to="{ name: 'migration' }">
          <ae-button face="round" fill="secondary">
            I already have an account
          </ae-button>
        </router-link>
      </app-intro>

      <app-panel padding margin shadow header-align="left">
        <template slot="header">
          <img :src="require('../../../assets/graphics/airgap-logo.svg')" alt="AirGap">
          Download & Install AirGap Vault App
        </template>
        <app-tutorial>
          <img
            slot="image"
            alt="Install"
            :src="require('../../../assets/images/tutorial-airgap/0.0-download-install.svg')"
          />
          <template slot="info">
            <h1>Download the AirGap Vault</h1>
            <p>
              Go to the App Store or Google Play Store and download the Airgap Vault App.
              For maximum security we recommend using a dedicated smart phone to store your AE tokens.
            </p>
            <footer>
              <a href="//itunes.apple.com/us/app/airgap-vault-secure-secrets/id1417126841" target="_blank">
                <img
                  title="Go to Apple Store"
                  alt="Apple Store"
                  :src="require('@/assets/graphics/apple-store.svg')"
                />
              </a>
              <a href="//play.google.com/store/apps/details?id=it.airgap.vault" target="_blank">
                <img
                  title="Go to Google Play"
                  alt="Google Play"
                  :src="require('@/assets/graphics/google-play.svg')"
                />
              </a>
            </footer>
          </template>
        </app-tutorial>
      </app-panel>
      <app-panel padding margin shadow header-align="left">
        <template slot="header">
          <img :src="require('../../../assets/graphics/airgap-logo.svg')" alt="AirGap">
          Creating a secret with AirGap
        </template>
        <app-slider>
          <app-slide-container>
            <app-tutorial>
              <img
                slot="image"
                alt="Install"
                :src="require('../../../assets/images/tutorial-airgap/1.0-secret-generate.svg')"
              />
              <template slot="info">
                <h1>Select ‘Generate’</h1>
                <p>
                  Generate a new secret. You can also import an existing mnemonic phrase / seed.
                </p>
                <p>
                  We strongly recommend that you generate a new secret phrase on an off-line device and not import
                  one that has been used on a device that has been connected to the internet.
                </p>
              </template>
            </app-tutorial>
          </app-slide-container>
          <app-slide-container>
            <app-tutorial>
              <img
                slot="image"
                alt="Install"
                :src="require('../../../assets/images/tutorial-airgap/1.1-secret-generate.svg')"
              />
              <template slot="info">
                <h1>Generate with entropy</h1>
                <p>
                  The enhanced entropy concept adds video, audio, accelerator and touch data to the entropy seed
                  alongside the device’s pre-shipped secure random generator in order to generate a cryptographically
                  secure seed used for the secret generation.
                </p>
              </template>
            </app-tutorial>
          </app-slide-container>
          <app-slide-container>
            <app-tutorial>
              <img
                slot="image"
                alt="Install"
                :src="require('../../../assets/images/tutorial-airgap/1.2-secret-write.svg')"
              />
              <template slot="info">
                <h1>Write your secret on a piece of paper</h1>
                <p>
                  In order to have a backup of your secret, you need to write the following words on a piece of paper.
                  Remember the rules!
                </p>
              </template>
            </app-tutorial>
          </app-slide-container>
          <app-slide-container>
            <app-tutorial>
              <img
                slot="image"
                alt="Install"
                :src="require('../../../assets/images/tutorial-airgap/1.3-secret-verify.svg')"
              />
              <template slot="info">
                <h1>Verify your secret</h1>
                <p>
                  Verify the secret you wrote down on a piece of paper, by ordering the mnemonic words in the right order.
                </p>
              </template>
            </app-tutorial>
          </app-slide-container>
          <app-slide-container>
            <app-tutorial>
              <img
                slot="image"
                alt="Install"
                :src="require('../../../assets/images/tutorial-airgap/1.4-secret-name.svg')"
              />
              <template slot="info">
                <h1>Security level & secret name</h1>
                <p>
                  Use your fingerprint to store the secret in the secure enclave of the mobile device, set a
                  password and confirm it for additional security.
                </p>
              </template>
            </app-tutorial>
          </app-slide-container>
        </app-slider>
      </app-panel>
      <app-panel padding margin shadow header-align="left">
        <template slot="header">
          <img :src="require('../../../assets/graphics/airgap-logo.svg')" alt="AirGap">
          Creating a secret with AirGap
        </template>
        <app-slider>
          <app-slide-container>
            <app-tutorial>
              <img
                slot="image"
                alt="Install"
                :src="require('../../../assets/images/tutorial-airgap/2.1-wallet-select.svg')"
              />
              <template slot="info">
                <h1>Add a new æternity wallet</h1>
                <p>
                  For the purpose of migrating to the Mainnet, we will create an æternity account.
                  Select ‘Add Wallet’ and choose <span class="app-highlight">æternity</span> from the list.
                </p>
                <ul>
                  <li class="success">æternity</li>
                  <li class="error">æternity Ethereum Token.</li>
                </ul>
              </template>
            </app-tutorial>
          </app-slide-container>
          <app-slide-container>
            <app-tutorial>
              <img
                slot="image"
                alt="Install"
                :src="require('../../../assets/images/tutorial-airgap/2.2-wallet-select.svg')"
              />
              <template slot="info">
                <h1>Select the newly added æternity wallet</h1>
                <p>
                  In order to have a backup of your secret, you need to write the following words on a piece of paper.
                  Remember the rules!
                </p>
              </template>
            </app-tutorial>
          </app-slide-container>
          <app-slide-container>
            <app-tutorial>
              <img
                slot="image"
                alt="Install"
                :src="require('../../../assets/images/tutorial-airgap/2.3-wallet-qr.svg')"
              />
              <template slot="info">
                <h1>Select your æternity wallet</h1>
                <p>
                  You will see your account address as well as a scannable QR code.
                  You will need that in the next steps of the token migration.
                </p>
              </template>
            </app-tutorial>
          </app-slide-container>
        </app-slider>
      </app-panel>
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
import AppTutorial from '../../../components/app-tutorial.vue'

export default {
  name: 'begin-airgap',
  components: {
    AeButton,
    AppSlider,
    AppSlideContainer,
    AppIntro,
    AppTutorial
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
    border-radius: 8px;
    box-shadow: 0 0 10px 0 rgba(27,68,121,0.14);
    background-color: $color-white;
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
      border-radius: 8px;
      box-shadow: 0 0 10px 0 rgba(27,68,121,0.14);
      background-color: $color-white;
      display: block;
      position: absolute;
      margin: 1rem;
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
