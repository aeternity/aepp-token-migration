<template>
<div class="home">
  <div>
    <!-- <hero :msg=" title "></hero>
    <tutorial-steps :msg=" title "></tutorial-steps> -->
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
import Hero from '@/components/Hero.vue'
import TutorialSteps from '@/components/Tutorial-Steps.vue'
import Accordion from '@/components/Accordion.vue'
export default {
  name: 'home',
  data: function () {
    return {
      hero: {
        title: 'hello world'
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
    Accordion
  }
}
</script>
