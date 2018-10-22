<template>
  <app-view>
    <app-header>
      <app-header-nav prog="2/6" text="Create an Aeternity account with Airgap" />
    </app-header>
    <app-view container>
      <app-intro>
        <template slot="title">
          Create an æternity <br /> account with AirGap
        </template>
        <router-link to="/migration">
          <ae-button face="round" fill="secondary">I already have an account</ae-button>
        </router-link>
      </app-intro>
      <div class="tutorial-wrapper">
        <div class="tutorial">
          <figure class="tutorial__img" v-if="!isMobile">
            <img :src="require('@/assets/images/tutorial_airgap/download.png')" alt="">
          </figure>
          <section class="tutorial__info">
            <h3 class="title title-category">Download & Install AirGap Vault app</h3>
            <p>
              Go to the App Store of Android Market and download the mobile App.
              For maximum security we recommend using a dedicated smartphone to
              store your AE tokens. <a href="" target="_blank">Learn More »</a>
            </p>
            <footer>
              <a href="">
                <img :src="require('@/assets/graphics/apple-store.svg')" alt="apple store button" title="go to apple store">
              </a>
              <a href="">
                <img :src="require('@/assets/graphics/google-play.svg')" alt="google play button" title="go to google play">
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
                <img :src="require('@/assets/images/tutorial_airgap/generate_1.png')" alt="">
              </figure>
              <section class="tutorial__info">
                <h3 class="title title-category">Generate your secret</h3>
                <h4 class="title title-subcategory">Write your secret on a piece of paper</h4>
                <p>
                  Your secret is what allows you to restore your tokens in case
                  you lose the phone where you installed the AirGap Vault app.
                </p>
              </section>
            </div>
          </app-slide-container>
          <app-slide-container>
            <div class="tutorial">
              <figure class="tutorial__img" v-if="!isMobile">
                <img :src="require('@/assets/images/tutorial_airgap/generate_1.png')" alt="">
              </figure>
              <section class="tutorial__info">
                <h3 class="title title-category">Download & Install AirGap Vault app</h3>
                <h4 class="title title-subcategory">Write your secret on a piece of paper</h4>
                <p>
                  Generate a new secret, you can also import an existing mnemonic phrase.
                  We recommend that you generate a new secret on the air gapped device and not import one that was previously used in a device with network connectivity.
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
                <img :src="require('@/assets/images/tutorial_airgap/Group_11.png')" alt="">
              </figure>
              <section class="tutorial__info">
                <h3 class="title title-category">Download & Install AirGap Vault app</h3>
                <h4 class="title title-subcategory">Write your secret on a piece of paper</h4>
                <p>
                  Go to the App Store of Android Market and download the mobile App.
                  For maximum security we recommend using a dedicated smartphone
                  to store your AE tokens. Learn More »
                </p>
              </section>
            </div>
          </app-slide-container>
          <app-slide-container>
            <div class="tutorial">
              <figure class="tutorial__img" v-if="!isMobile">
                <img :src="require('@/assets/images/tutorial_airgap/Group_11.png')" alt="">
              </figure>
              <section class="tutorial__info">
                <h3 class="title title-category">Download & Install AirGap Vault app</h3>
                <h4 class="title title-subcategory">Write your secret on a piece of paper</h4>
                <p>
                  Generate a new secret, you can also import an existing mnemonic phrase.
                  We recommend that you generate a new secret on the air gapped device and not import one that was previously used in a device with network connectivity.
                </p>
              </section>
            </div>
          </app-slide-container>
        </app-slider>
      </div>
    </app-view>
    <app-footer>
      <router-link to="/migration">
        <ae-button face="round" fill="primary" shadow>Start Migration</ae-button>
      </router-link>
    </app-footer>
  </app-view>
</template>

<script>
import AeButton from '@aeternity/aepp-components/dist/ae-button'

import AppIntro from '@/components/app-intro.vue'
import AppSlider from '@/components/app-slider.vue'
import AppSlideContainer from '@/components/app-slide-container.vue'
import AeBlock from '@/components/ae-block.vue'

export default {
  name: 'Tutorials',
  components: {
    AppSlider,
    AppSlideContainer,
    AeBlock,
    AppIntro,
    AeButton
  },
  data: function () {
    return {
      open: false,
      windowWidth: window.innerWidth
    }
  },
  mounted () {
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
    })
  },
  computed: {
    isMobile () {
      return this.windowWidth <= 768
    }
  },
}
</script>
<style lang="scss" scoped>

.tutorial-wrapper{
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

      &__info{
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
