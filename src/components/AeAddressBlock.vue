<template>
  <ae-block>
    <article class="ae-address-block">
      <header class="ae-address-block__header">
        <div :class="[address ? '' : 'address-unkown']">
          <ae-avatar :address="address"/>
        </div>
      </header>
      <section class="ae-address-block__input">
        <slot name="body"></slot>
      </section>
      <footer class="ae-address-block__footer">
        <ae-check name="approve"  v-model="isChecked">
          <ae-text face="sans-s">I am certain my address and identicon are correct</ae-text>
        </ae-check>
        <div class="ae-address-block__footer__button">
          <router-link to="/connect">
            <ae-button face="round" fill="primary"  :disabled="!isChecked" extend>continue</ae-button>
          </router-link>
          <slot name="footer"></slot>
        </div>
      </footer>
    </article>
  </ae-block>
</template>

<script>
import AeBlock from '@/components/AeBlock'
import AeText from '@aeternity/aepp-components/dist/ae-text'
import AeAvatar from '@aeternity/aepp-components/dist/ae-identicon'
import AeInput from '@aeternity/aepp-components/dist/ae-input'
import AeToolbar from '@aeternity/aepp-components/dist/ae-toolbar'
import AeCheck from '@aeternity/aepp-components/dist/ae-check'
import AeButton from '@aeternity/aepp-components/dist/ae-button'

export default {
  name: 'ae-address-block',
  props: {
    address: String,
    isChecked: false,
    rescan: Boolean
  },
  components: {
    AeBlock,
    AeText,
    AeAvatar,
    AeInput,
    AeToolbar,
    AeCheck,
    AeButton
  }
}
</script>
<style lang="scss" scoped>
.address-unkown {
  filter: grayscale(100%);
  opacity: .5;
}
.ae-address-block {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;

  &__header {
    display: flex;
    justify-content: space-evenly;
    width: auto;
    box-shadow: $shadow;
    margin: -$spacer-l;
    margin-bottom: $spacer-l;
    height: 4rem;
    padding: $spacer-m;

  }

  &__input {
    padding: $spacer-l $spacer-xxl 0;
  }

  &__footer {
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    margin: $spacer-m 0;
    width: 100%;
    padding: 0 $spacer-xxl;

    &__button {
      width: 18rem;
      margin: 2rem auto;

    }
  }
}
</style>
