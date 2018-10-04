<template>

<div class="home">
  <app-header>
    <ae-button
    to="./Start"
    type="exciting"
    size="medium"
    :uppercase="true"
    >
      swap now
    </ae-button>
  </app-header>
  <div class="home__frame">
    <hero :title="hero.title"></hero>
    <tutorial-steps ></tutorial-steps>
    <section >
      <accordion
      v-for="accordion in accordions"
      :key="accordion.id"
      :title="accordion.title"
      :accordion="accordion">
        <p>
          {{ accordion.body }}
        </p>
      </accordion>
    </section>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { AeButton } from '@aeternity/aepp-components'
import AppHeader from '@/components/AppHeader.vue'
import Hero from '@/components/Hero.vue'
import TutorialSteps from '@/components/Tutorial-Steps.vue'
import Accordion from '@/components/Accordion.vue'
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
<style src="./Home.scss" lang="scss"></style>
