<template>
  <main class="home">
<<<<<<< HEAD:src/views/index/index.vue
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
=======
    <header class="home-header">
      <div class="home-header__logo">
        <router-link to="/">
          <img :src="require('@/assets/logo.svg')" alt="æternity logo">
        æternity
        </router-link>
      </div>
      <nav class="menu">
        <div v-if="isMobile" class="menu-icon" @click="toggleMenu">
          <ae-icon :name="`${open ? 'close' : 'burger'}`" />
        </div>
        <ul class="main-nav" :class="[open || !isMobile ? 'is-open' : 'is-closed']">
          <li class="main-nav__item">
            <a href="#how-to-migrate">How to migrate</a>
          </li>
          <li class="main-nav__item">
            <a href="#roadmap"> Roadmap</a>
          </li>
          <li class="main-nav__item">
            <a href="#faq">FAQ</a>
          </li>
          <li class="main-nav__item">
            <a href="#see-migration-status">See migration status</a>
          </li>
        </ul>
      </nav>
    </header>
    <article>
    <header class="hero">
      <div class="hero__inner-wrapper">
        <h1 class="title hero__title">
          Migrate your AE tokens to the æternity mainnet
        </h1>
        <p>
          The Mainnet is almost ready! All the AE tokens you own on Ethereum can now be migrated to the mainnet. With this tool we guide you securely through the process.
        </p>
        <div class="button-wrapper">
          <router-link to="/start">
>>>>>>> Add mobile menu, and nav, make steps-list and step-list-item component with styles:src/views/Home/Home.vue
            <ae-button face="round" fill="primary" extend>
              Start Migration
            </ae-button>
          </router-link>
        </div>
      </div>
      <div class="hero__line"></div>
    </header>
    <section>
        <intro>
            <h2 class="title title-sub">
              How to migrate
            </h2>
            <p>
              All the AE Tokens that are going to be migrated with this tool, will be available in the Mainnet after a certain period of time.
            </p>
        </intro>
        <steps-list>
          <step-list-item>
            <h4 class="title title-subcategory">
              Create an æternity account with AirGap or with Ledger Nano S
            </h4>
            <p>
              Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.
            </p>
            <footer class="steps-footer">
              <a class="steps-footer__cta" href="#">
                <img :src="require('@/assets/graphics/airgap-logo.svg')" alt="airgap wallet logo">
              </a>
              <a class="steps-footer__cta" href="#">
                <img :src="require('@/assets/graphics/ledger-logo.svg')" alt="ledger logo">
              </a>
            </footer>
          </step-list-item>
          <step-list-item>
            <h4 class="title title-subcategory">
              Transfer the desired amount tokens to the AE Migration Address
            </h4>
            <p>
              Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.
            </p>
            <footer class="steps-footer">
              <a class="steps-footer__cta" href="#">
                <img :src="require('@/assets/graphics/metamask-fox.svg')" alt="airgap wallet logo"> install Meta Mask
              </a>
              <a class="steps-footer__cta" href="#">
                <img :src="require('@/assets/graphics/myetherwallet.svg')" alt="ledger logo"> Register at My Ether Wallet
              </a>
            </footer>
          </step-list-item>
          <step-list-item>
            <h4 class="title title-subcategory">
              The AE Migration Address burns the AE tokens
            </h4>
            <p>
              Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.
            </p>
            <footer class="steps-footer">
              <a class="steps-footer__cta" href="#">
                <img :src="require('@/assets/graphics/airgap-logo.svg')" alt="airgap wallet logo">
              </a>
              <a class="steps-footer__cta" href="#">
                <img :src="require('@/assets/graphics/ledger-logo.svg')" alt="ledger logo">
              </a>
            </footer>
          </step-list-item>
          <step-list-item>
            <h4 class="title title-subcategory">
              Your tokens are now available on the æternity Mainnet
            </h4>
            <p>
              Sed posuere consectetur est at lobortis. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.
            </p>
            <footer class="steps-footer">
              <a class="steps-footer__cta" href="#">
                <img :src="require('@/assets/graphics/airgap-logo.svg')" alt="airgap wallet logo">
              </a>
              <a class="steps-footer__cta" href="#">
                <img :src="require('@/assets/graphics/ledger-logo.svg')" alt="ledger logo">
              </a>
            </footer>
          </step-list-item>
        </steps-list>
      <footer>
        <intro>
          <h3 class="title title-category">
            Start Migrating
          </h3>
          <p>
            All the AE Tokens that are going to be migrated with this tool, will be available in the Mainnet after a certain period of time.
          </p>
          <div class="line"></div>
          <div class="button-wrapper">
            <router-link to="/start">
              <ae-button face="round" fill="primary" extend>
                Start Migration
              </ae-button>
            </router-link>
          </div>
        </intro>
      </footer>
    </section>
    <section>
      <intro>
        <h2 class="title title-category">
          Migration Roadmap
        </h2>
        <p>
          The tokens are not migrated immediately, but in batches. The AE Migration Address ‘collects’ the received tokens and spawns them in the Mainnet, in phases.
        </p>
      </intro>
    </section>
    </article>
  </main>
</template>

<script>
<<<<<<< HEAD:src/views/index/index.vue
import AppHeader from '@/sections/app-header/index.vue'
import Hero from '@/components/hero.vue'
import Steps from '@/components/steps.vue'
import Accordion from '@/components/accordion.vue'
import AeIntro from '@/components/ae-intro.vue'
=======
import AppHeader from '@/components/AppHeader.vue'
import Hero from '@/components/Hero.vue'
import Accordion from '@/components/Accordion.vue'
import Intro from '@/components/intro.vue'
>>>>>>> Add mobile menu, and nav, make steps-list and step-list-item component with styles:src/views/Home/Home.vue
import AeButton from '@aeternity/aepp-components/dist/ae-button'
import AeIcon from '@aeternity/aepp-components/dist/ae-icon'
import StepsList from '@/components/steps-list.vue'
import StepListItem from '@/components/step-list-item.vue'

export default {
  name: 'home',
  data: function () {
    return {
<<<<<<< HEAD:src/views/index/index.vue
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
=======
      open: false,
      windowWidth: window.innerWidth
    }
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth
    })
  },
  computed: {
    isMobile() {
      if (this.windowWidth <= 768) {
        return true
      } return false
    }
  },
  methods: {
    toggleMenu () {
      this.open = !this.open
>>>>>>> Add mobile menu, and nav, make steps-list and step-list-item component with styles:src/views/Home/Home.vue
    }
  },
  components: {
    Hero,
    StepsList,
    StepListItem,
    Accordion,
    AppHeader,
    Intro,
    AeButton,
    AeIcon
  }
}
</script>
<style src="@/views/Home/home.scss" lang="scss"></style>
