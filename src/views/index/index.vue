<template>
  <main class="home">
    <hero :title="hero.title" :to="hero.link" :cta="hero.cta" :text="hero.text"/>
    <section>
      <ae-intro :title="intro.title" :intro="intro.text"/>
    </section>
    <section>
      <steps :steps="steps"/>
    </section>
    <section class="final-cta">
      <ae-intro :title="cta.title" :intro="cta.text">
        <div class="final-cta__line"></div>
        <div class="final-cta__btn">
          <router-link :to="cta.link" class="button-wrapper">
            <ae-button face="round" fill="primary" extend>
              {{ cta.cta }}
            </ae-button>
          </router-link>
        </div>
      </ae-intro>
    </section>
    <!-- <section>
      <accordion
        v-for="accordion in accordions"
        :key="accordion.id"
        :title="accordion.title"
        :accordion="accordion">
        <p>{{ accordion.body }}</p>
      </accordion>
    </section> -->
  </main>
</template>

<script>
import AppHeader from '@/sections/app-header/index.vue'
import Hero from '@/components/hero.vue'
import Steps from '@/components/steps.vue'
import Accordion from '@/components/accordion.vue'
import AeIntro from '@/components/ae-intro.vue'
import AeButton from '@aeternity/aepp-components/dist/ae-button'

export default {
  name: 'home',
  data: function () {
    return {
      hero: {
        title: 'Migrate your AE tokens to the æternity mainnet',
        text: `The Mainnet is almost ready! All the AE tokens you own on Ethereum can now be migrated to the mainnet. With this tool we guide you securely through the process.`,
        link: '/begin',
        cta: 'Start Migration'
      },
      intro: {
        title: 'How to migrate',
        text: `All the AE Tokens that are going to be migrated with this tool, will be available in the Mainnet after a certain period of time.`
      },
      cta: {
        title: 'How to migrate',
        link: '/begin',
        cta: 'Start Migration',
        text: `All the AE Tokens that are going to be migrated with this tool, will be available in the Mainnet after a certain period of time.`
      },
      steps: [
        {
          title: 'Create an æternity account with AirGap or with Ledger Nano S',
          text: 'Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.',
          links: [
            {
              img: require('@/assets/graphics/airgap-logo.svg'),
              link: '',
              cta: ''
            },
            {
              img: require('@/assets/graphics/ledger-logo.svg'),
              link: '',
              cta: ''
            }

          ]
        },
        {
          title: 'Transfer the desired amount tokens to the AE Migration Address',
          text: 'Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.',
          links: [
            {
              img: require('@/assets/graphics/airgap-logo.svg'),
              link: '',
              cta: ''
            }
          ]
        },
        {
          title: 'The AE Migration Address burns the AE tokens',
          text: 'Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.',
          links: [
            {
              img: require('@/assets/graphics/airgap-logo.svg'),
              link: '',
              cta: ''
            }
          ]
        },
        {
          title: 'Your tokens are now available on the æternity Mainnet',
          text: 'Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.',
          links: [
            {
              img: require('@/assets/graphics/airgap-logo.svg'),
              link: '',
              cta: ''
            }
          ]
        }
      ],
      accordions: [
        {
          title: 'number one',
          body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet sed doloribus natus reprehenderit facere eius voluptate. Voluptate, delectus. Maxime accusantium dolorem culpa quia repellat dolores hic placeat reprehenderit vitae atque.'
        },
        {
          title: 'number two',
          body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet sed doloribus natus reprehenderit facere eius voluptate. Voluptate, delectus. Maxime accusantium dolorem culpa quia repellat dolores hic placeat reprehenderit vitae atque.'
        },
        {
          title: 'number three',
          body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet sed doloribus natus reprehenderit facere eius voluptate. Voluptate, delectus. Maxime accusantium dolorem culpa quia repellat dolores hic placeat reprehenderit vitae atque.'
        }
      ]
    }
  },
  components: {
    Hero,
    Steps,
    Accordion,
    AppHeader,
    AeIntro,
    AeButton
  }
}
</script>
<style lang="scss">
.home {
  background-color: $white;
}
section {
  max-width: 60em;
  margin: 7% auto;
}

.final-cta{
    position: relative;
    padding-bottom: 5%;
   &__line {
    height: 7rem;
    width: 2px;
    margin: $spacer-l auto;
    background-color: $grey;
    //position: absolute;
    // bottom: -3rem;
    // left: 50%;
    // transform: translate(-50%);
   }
   &__btn{
     display: block;
      max-width: 15em;
      margin: 0 auto;
   }
}

</style>
