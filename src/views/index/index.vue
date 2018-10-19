<template>
  <main class="home">
    <header class="home-header" >
      <div class="home-header__inner-wrapper">
        <figure class="home-header__logo">
          <router-link to="/">
            <img :src="require('@/assets/logo.svg')" alt="æternity logo">
          æternity
          </router-link>
        </figure>
        <nav class="menu">
          <div v-if="!isDesktop" class="menu-icon" @click="toggleMenu">
            <ae-icon :name="`${open ? 'close' : 'burger'}`" />
          </div>
          <ul class="main-nav" :class="[open || isDesktop ? 'is-open' : 'is-closed']">
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
      </div>
    </header>
    <article id="content" >
    <header class="hero" >
      <div class="hero__inner-wrapper">
        <h1 class="title hero__title">
          Migrate your AE tokens to the æternity mainnet
        </h1>
        <p>
          The Mainnet is almost ready! All the AE tokens you own on Ethereum can now be migrated to the mainnet. With this tool we guide you securely through the process.
        </p>
        <div class="button-wrapper">
          <router-link :to="{ name: 'begin' }">
            <ae-button face="round" fill="primary" extend>
              Start Migration
            </ae-button>
          </router-link>
        </div>
      </div>
      <div class="hero__line"></div>
    </header>
   <!--  <affix class="bottom-cta" relative-element-selector="#content" :scrollAffix="false" >
      <div class="button-wrapper">
        <router-link to="/start">
          <ae-button face="round" fill="primary" extend>
            Start Migration
          </ae-button>
        </router-link>
      </div>
    </affix> -->
    <section >
        <intro>
            <h2 class="title title-sub">
              How to migrate
            </h2>
            <p>
              All the AE Tokens that are going to be migrated with this tool, will be available in the Mainnet after a certain period of time.
            </p>
        </intro>
        <steps-list :primary="true">
          <step-list-item name="Step">
            <template slot="info">
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
            </template>
          </step-list-item>
          <step-list-item name="Step">
            <template slot="info">
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
            </template>
          </step-list-item>
          <step-list-item name="Step">
            <template slot="info">
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
            </template>
          </step-list-item>
          <step-list-item name="Step">
            <template slot="info">
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
            </template>
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
    <section class="roadmap">
      <intro>
        <h2 class="title title-category">
          Migration Roadmap
        </h2>
        <p>
          The tokens are not migrated immediately, but in batches. The AE Migration Address ‘collects’ the received tokens and spawns them in the Mainnet, in phases.
        </p>
      </intro>
      <steps-list :secondary="true">
          <step-list-item name="Phase">
            <template slot="number">
              Ends November ‘18
            </template>
            <template slot="info">
              <h3 class="title title-small">
                Mainnet Launch
              </h3>
              <p>
                Will include all the migrated tokens until Mainnet launch
              </p>
            </template>
          </step-list-item>
          <step-list-item name="Current Phase" :isActive="true">
            <template slot="number">
              Ends February ‘19
            </template>
            <template slot="info">
            <h3 class="title title-small">
              Hardfork 1
            </h3>
            <p>
              Will include all the migrated tokens between Mainnet launch and the 1st Hardfork
            </p>
            </template>
          </step-list-item>
          <step-list-item name="Phase" >
            <template slot="number">
              Ends May ‘19
            </template>
            <template slot="info">
              <h3 class="title title-small">
                Hardfork 2
              </h3>
              <p>
                Will include all the migrated tokens between the 1st and 2nd Hardfork
              </p>
            </template>
          </step-list-item>
          <step-list-item name="Phase">
            <template slot="number">
              Ends September ‘19
            </template>
            <template slot="info">
              <h3 class="title title-small">
                Hardfork 3
              </h3>
              <p>
                Will include all the migrated tokens between the 2nd and 3rd Hardfork
              </p>
            </template>
          </step-list-item>
      </steps-list>
    </section>
    <section class="faq">
      <article class="faq__inner-wrapper">
        <div class="faq__info">
            <h2 class="titletitle-category">F.A.Q.</h2>
            <p>
              We started as a ERC-20 token Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean lacinia bibendum nulla sed consectetur. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
            </p>
        </div>
        <div class="faq__q-a">
          <accordion>
            <template slot="title">
              <h3 class="titletitle-tiny">
                What’s mainnet?
              </h3>
            </template>
            <template slot="body">
              <p>
                We started as a ERC-20 token Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean lacinia bibendum nulla sed consectetur. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
              </p>
            </template>
          </accordion>
          <accordion>
            <template slot="title">
              <h3 class="titletitle-tiny">
                What’s my ETH account?
              </h3>
            </template>
            <template slot="body">
              <p>
                We started as a ERC-20 token Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean lacinia bibendum nulla sed consectetur. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
              </p>
            </template>
          </accordion>
          <accordion>
            <template slot="title">
              <h3 class="titletitle-tiny">
                What’s mainnet?
              </h3>
            </template>
            <template slot="body">
              <p>
                We started as a ERC-20 token Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean lacinia bibendum nulla sed consectetur. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
              </p>
            </template>
          </accordion>
          <accordion>
            <template slot="title">
              <h3 class="titletitle-tiny">
                What’s mainnet?
              </h3>
            </template>
            <template slot="body">
              <p>
                We started as a ERC-20 token Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean lacinia bibendum nulla sed consectetur. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
              </p>
            </template>
          </accordion>
          <accordion>
            <template slot="title">
              <h3 class="titletitle-tiny">
                What’s mainnet?
              </h3>
            </template>
            <template slot="body">
              <p>
                We started as a ERC-20 token Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean lacinia bibendum nulla sed consectetur. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
              </p>
            </template>
          </accordion>
          <accordion>
            <template slot="title">
              <h3 class="titletitle-tiny">
                What’s mainnet?
              </h3>
            </template>
            <template slot="body">
              <p>
                We started as a ERC-20 token Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean lacinia bibendum nulla sed consectetur. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
              </p>
            </template>
          </accordion>
          <accordion>
            <template slot="title">
              <h3 class="titletitle-tiny">
                What’s mainnet?
              </h3>
            </template>
            <template slot="body">
              <p>
                We started as a ERC-20 token Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean lacinia bibendum nulla sed consectetur. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
              </p>
            </template>
          </accordion>
          <accordion>
            <template slot="title">
              <h3 class="titletitle-tiny">
                What’s mainnet?
              </h3>
            </template>
            <template slot="body">
              <p>
                We started as a ERC-20 token Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean lacinia bibendum nulla sed consectetur. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
              </p>
            </template>
          </accordion>
        </div>
      </article>
    </section>
    <footer class="footer">
      <div class="to-top">
         <ae-button face="icon" fill="primary">
           <ae-icon name="left-more" size="2rem"/>
         </ae-button>
      </div>
    </footer>
    </article>
  </main>
</template>

<script>
import Hero from '@/components/hero.vue'
import Accordion from '@/components/accordion.vue'
import Intro from '@/components/intro.vue'
import AeButton from '@aeternity/aepp-components/dist/ae-button'
import AeIcon from '@aeternity/aepp-components/dist/ae-icon'
import StepsList from '@/components/steps-list.vue'
import StepListItem from '@/components/step-list-item.vue'

export default {
  name: 'home',
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
    isDesktop () {
      return this.windowWidth >= 1000
    }
  },
  methods: {
    toggleMenu () {
      this.open = !this.open
    }
  },
  components: {
    Hero,
    StepsList,
    StepListItem,
    Accordion,
    Intro,
    AeButton,
    AeIcon
  }
}
</script>
<style lang="scss">
.home-header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  padding: $spacer-xl;
  padding-bottom: 0;

  @include phone-and-tablet {
    padding: $spacer-m;
  }

  &__inner-wrapper {
    display: flex;
    justify-content: space-between;
  }

  &__logo {
    font-weight: 600;
    @include font-size(s);
    & a {
      display: flex;
      & img {
        max-width: 3rem;
        margin-right: $spacer-m;
      }
    }
  }
}

.home {
  overflow: hidden;
}

.menu {
  //position: relative;
  //overflow: hidden;
  //width:  1.7rem;
}

.menu-icon {
  font-size: 1.7rem;
}

.vue-affix {
  width: 100%;
}

.bottom-cta {
  background-color: $white;
}

.main-nav {
  list-style: none;
  display: flex;
  @include font-size(xs);
  font-weight: 600;
  text-transform: uppercase;
  @include phone-and-tablet {
    @include font-size(s);
    position: absolute;
    flex-direction: column;
    top: 3rem;
    right: 0;
    height: 100vh;
    width: 0;
    text-align: right;
    background: $bg-color;
    transition: transform .3s ease;
    transform: translateX(+110%);
    overflow: hidden;
  }

  &__item {
    margin-right: $spacer-xl;
    &:last-child {
      margin-right: 0;
    }

    @include phone-and-tablet {
      padding: $spacer-m;
      margin: $spacer-m 0;
      &:first-child {
        margin-top: auto;
        &::before {
          //offset header hight
          content: '';
          display: block;
          margin-top: -3rem;
        }
      }
      &:last-child {
        margin-bottom: auto;
      }

      &:hover {
        background-color: $grey;
      }
    }
  }
}

.is-open.main-nav {
  transform: translateX(0);
  width: 100%;
}

.intro {
  margin: $spacer-xxl auto;
  max-width: 30rem;
}

.hero {
  position: relative;
  height: 100%;
  min-height: 90vh;
  background-color: $bg-color;
  display: flex;
  padding: $spacer-xl;
  text-align: center;
  &__inner-wrapper {
    max-width: 60em;
    margin: auto;
  }
  &__title {

    @include font-size(xxxl);

    line-height: 1.1em;
    margin-bottom: 1.5rem;
    font-weight: bold;
    @include only-phone {
      @include font-size(xxl);
    }
  }

  &__text {
    margin-bottom: 1.5rem;
    @include font-size(l);
    line-height: 1.7em;

  }
  &__line {
    height: 6rem;
    width: 2px;
    background-color: $magenta;
    position: absolute;
    bottom: -3rem;
    left: 50%;
    transform: translate(-50%);
  }
}

.home {
  background-color: $white;
}

section {
  @include content-max-width;
  padding: 0 1rem;
  margin-bottom: $spacer-xxl;
}

.roadmap {
  width: 100%;
  max-width: 100%;
  /* margin-left:  auto; */
}

.faq {
  width: 100%;
  max-width: 100%;
  margin-bottom: 0;
  background-color: $bg-color;
  padding: $spacer-xl;
  &__inner-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 85%;
    margin: 0 auto;
  }
  &__info {
    width: 100%;
    margin-bottom: $spacer-l;
    @include tablet-and-desktop {
      width: 30%;
      margin-right: $spacer-xl;
    }
  }
  &__q-a {

    @include tablet-and-desktop {
      width: 60%;
      max-width: 55rem;
    }
  }

}

.footer {
  background-color: $bg-color;
}

.to-top {
  display: flex;
  padding: $spacer-xl;
  justify-content: flex-end;
  button > i {
    transform: rotate(-90deg);
  }
}

.steps-footer {
  widht: 100%;
  display: flex;
  flex-wrap: wrap;
  &__cta {
    display: flex;
    align-items: center;
    font-weight: bold;
    margin-bottom: $spacer-m;
    & img {
      max-width: 2rem;
      margin-right: $spacer-s;
    }
    &:not(:last-child) {
      margin-right: $spacer-m;
    }
  }
}

.line {
  height: 7rem;
  width: 1px;
  margin: $spacer-l auto;
  background-color: $black;
}

.final-cta {
  position: relative;
  padding-bottom: 5%;
  &__
  &__btn {
    display: block;
    max-width: 15em;
    margin: 0 auto;
  }
}

.button-wrapper {
  display: block;
  max-width: 15em;
  margin: 0 auto;
}
</style>
