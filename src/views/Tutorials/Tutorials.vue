<template>
  <main class="view" :class="this.$options.name">
    <app-header></app-header>
    <article class="view__content">
      <ae-intro
        :title="intro.title"
      >
        <ae-btn to="/Migrate" :is_secondary="true">I have one already</ae-btn>
      </ae-intro>
      <ae-block v-for="tutorial in tutorials"
      :key="tutorial.id"
      >
      <h3 class="block__title">{{ tutorial.title }}</h3>
      <div class="ae-slider"
      v-for="step in tutorial.steps"
      :key="step.id"
      >
        <article class="ae-slider__body">
            <h4 v-if="step.title">{{ step.title }}</h4>
            <p v-if="step.text">{{ step.text }}</p>
            <a
            v-for="button in step.buttons"
            :href="button.link"
            :key="button.id"
            >
              <img :src="button.img">
          </a>
        </article>
        <div class="ae-slider__img">
          <img :src="step.img" :alt="step.title || tutorial.title ">
        </div>
      </div>
      </ae-block>
    </article>
    <ae-nav></ae-nav>
  </main>
</template>

<script>
// @ is an alias to /src
// import { AeButton } from '@aeternity/aepp-components'
import AppHeader from '@/components/AppHeader.vue'
import AeBlock from '@/components/AeBlock.vue'
import AeIntro from '@/components/AeIntro.vue'
import AeCta from '@/components/AeCta.vue'
import AeBtn from '@/components/AeBtn.vue'
import AeNav from '@/components/AeNav.vue'
export default {
  name: 'Tutorials',
  data: function () {
    return {
      intro: {
        title: 'Generate your key pair with AirGap',
        intro: `For migrating your ERC20 tokens from Ethereum to the æternity main net you need to safely create a key pair first. Skip this step if you already created one.`
      },
      tutorials: [
        {
          title: 'Download & Install AirGap Vault app',
          steps: [
            {
              title: '',
              img: require('@/assets/images/tutorial_airgap/download.png'),
              text: `Go to the App store of your choosing and download the mobile App. If possible, use a on a dedicated or old smartphone.
                After the download put your phone in airplane mode to disconnect the device from any network, and open the app.
                `,
              buttons: [
                {
                  img: require('@/assets/graphics/apple-store.svg'),
                  link: ''
                },
                {
                  img: require('@/assets/graphics/google-play.svg'),
                  link: ''
                }
              ]
            }
          ]
        },
        {
          title: 'Download & Install AirGap Vault app',
          steps: [
            {
              title: '',
              text: `Go to the App store of your choosing and download the mobile App. If possible, use a on a dedicated or old smartphone.
                After the download put your phone in airplane mode to disconnect the device from any network, and open the app.
                `,
              buttons: [
                {
                  img: '',
                  link: ''
                },
                {
                  img: '',
                  link: ''
                }
              ]
            }
          ]
        }
      ]
    }
  },
  components: {
    AppHeader,
    AeBlock,
    AeIntro,
    AeCta,
    AeBtn,
    AeNav
  }
}
</script>
<style lang="scss">
  .block{
    display: flex;
    flex-wrap: wrap;
    &__title {
      @include font-size(xl);
      line-height: 1.3em;
      width: 50%;
      margin-left: auto;

    }
  }

  .ae-slider{
    &__img{
      width: 50%;
      & img {
        width: 100%;
        height: auto;
      }
    }
  }
</style>
