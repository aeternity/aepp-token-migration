<template>
  <agile v-if="condition"
         class="ae-slider"
         :arrows="false" :infinite="false">
    <div class="slide"
         v-for="item in slides"
         :key="item.id">
      <ae-slide
        :maintitle="maintitle"
        :src="item.img"
        :alt="item.title || maintitle"
        :subtitle="item.title"
        :text="item.text">
        <a v-if="item.buttons"
           v-for="button in item.buttons"
           :href="button.link"
           :key="button.id">
          <img :src="button.img">
        </a>
      </ae-slide>
    </div>
  </agile>
  <div v-else class="ae-slider ae-slider_single">
    <ae-slide v-for="item in slides"
              :key="item.id"
              :maintitle="maintitle"
              :src="item.img"
              :alt="item.title || maintitle"
              :subtitle="item.title"
              :text="item.text">
      <a v-if="item.buttons"
         v-for="button in item.buttons"
         :href="button.link"
         :key="button.id">
        <img :src="button.img" />
      </a>
    </ae-slide>
  </div>
</template>
<script>
// @ is an alias to /src
import AeSlide from '@/components/ae-slide.vue'

export default {
  name: 'ae-slider',
  props: {
    condition: true,
    slides: { type: Array },
    maintitle: String
  },
  components: {
    AeSlide
  }
}
</script>
