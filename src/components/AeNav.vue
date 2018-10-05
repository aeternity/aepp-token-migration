<template>
  <nav class="ae-nav">
    <router-link class="ae-nav__link"
      v-for="page in pages"
      :key="page.id"
      :to="page.link"
      @click.native.prevent="guideUser('please complete the steps', $event)"
      >
      <span class="ae-link__icon">
        <i></i>
      </span>
      <span class="ae-link__name">
        {{ page.name }}
      </span>
        <span class="ae-link__line"></span>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'ae-nav',
  props: {
    to: { type: [String, Object], default: undefined }
  },
  data: function () {
    return {
      pages: [
        { name: 'Start Migration',
          link: '/Start'
        },
        { name: 'Generate your key pair',
          link: '/Tutorials'
        },
        { name: 'Enter your new æternity address',
          link: '/Migrate'
        },
        { name: 'Connect your Etherum Wallet',
          link: '/Connect'
        },
        { name: 'Generate your key pair',
          link: '/Tutorial'
        }
      ]
    }
  },
  methods: {
    guideUser (message, event) {
      // now we have access to the native event
      event.preventDefault()
      alert(message)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.ae-nav {
  position: fixed;
  top: 4rem;
  left: 0;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @include font-size(xs);
  &__link {
    display: flex;
    align-items: center;
    margin: $spacer-l;
    position: relative;
  }
}

.ae-link{
  padding: $spacer-xxs 0;
  &__line {
    position: absolute;
    top: 1.1rem;
    left: .65rem;
    display: block;
    background: $black;
    width: 2px;
    height: 4.7rem;
  }
  &__icon {
    display: inline-block;
    position: relative;
    margin: 2px;
    margin-right: $spacer-s;
    border-radius: 50%;
    border: 2px solid transparent;
    width: 1rem;
    height: 1rem;
    z-index: 2;
    & i {
      display: block;
      z-index: 2;
      position: absolute;
      top: 50%;
      left: 50%;
      margin: auto;
      font-style: normal;
      line-height: 0;
      border-radius: 50%;
      background: $black;
      transform: translate(-50%, -50%);
      width: .7rem;
      height: .7rem;
    }
  }
  &__name {
    display: none;
    background: $black;
    color: $white;
    border-radius: 1rem;
    padding: 0 $spacer-m;
  }
}

//hide last line
.ae-nav .ae-nav__link:last-child .ae-link__line{
  display: none;
}

//active styles
.ae-nav__link{
  &:hover .ae-link__name{
    display: inline-block;
    background: $black;
  }
}

.router-link-active .ae-link{
  &__icon {
    border: 2px solid $black;
    background: $bg-color;
    & i {
    }
  }
  &__name {
    display: inline-block;
  }
}

.router-link-active ~ .ae-nav__link {
  & .ae-link__icon i{
    background: $darkgrey;
  }
  & .ae-link__line {
    background: $darkgrey;
    &:after{
      position: absolute;
      bottom: 5.45rem;
      left: 0rem;
      content: '';
      display: block;
      background: $darkgrey;
      width: 2px;
      height: 4.7rem;
      z-index: 1;
    }
  }
  &:hover{
      & .ae-link__name{
        display: inline-block;
        background: $darkgrey;
      }
      & .ae-link__icon{
        //border: 2px solid $black;
        //background: $bg-color;
      }
    }
}
</style>
