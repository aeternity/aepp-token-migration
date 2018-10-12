<template>
  <div class="home">
    <app-header>
      <router-link to="/Start">
        <ae-button face="round" fill="primary" :uppercase="true">
          Swap Now
        </ae-button>
      </router-link>
    </app-header>
    <div class="home__frame">
      <hero :title="hero.title"/>
      <tutorial-steps />
      <section>
        <accordion
          v-for="accordion in accordions"
          :key="accordion.id"
          :title="accordion.title"
          :accordion="accordion">
          <p>{{ accordion.body }}</p>
        </accordion>
      </section>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import Hero from '@/components/Hero.vue'
import TutorialSteps from '@/components/Tutorial-Steps.vue'
import Accordion from '@/components/Accordion.vue'
import AeButton from '@aeternity/aepp-components/dist/ae-button'

export default {
  name: 'home',
  data: function () {
    return {
      hero: {
        title: '1.699.578'
      },
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
    TutorialSteps,
    Accordion,
    AppHeader,
    AeButton
  }
}
</script>
<style lang="scss">
.home {
  padding: 0 $spacer-l;

  &__frame {
    //min-height: 100vh;
    padding: $spacer-m;
    background-image: linear-gradient(-180deg, #F7296E 0%, #6948A1 100%);
  }
}
</style>
