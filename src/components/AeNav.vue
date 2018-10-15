<template>
  <nav class="ae-nav">
    <router-link class="ae-nav__link"
      v-for="page in pages"
      :key="page.id"
      :to="page.link"
      event=""
    >
      <span class="ae-link__dot"></span>
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
        {
          name: 'Start Migration',
          link: '/Start'
        },
        {
          name: 'Generate your key pair',
          link: '/Tutorials'
        },
        {
          name: 'Enter your new æternity address',
          link: '/Migrate'
        },
        {
          name: 'Connect your Etherum Wallet',
          link: '/Connect'
        },
        {
          name: 'Make transaction to migration address',
          link: '/PrepareTransactions'
        },
        {
          name: 'Migration Result',
          link: '/MigrationResult'
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
<style  lang="scss" scoped>
.ae-nav {
  @include font-size(xs);

  position: fixed;
  top: 4rem;
  left: 0;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &__link {
    display: flex;
    align-items: center;
    margin: $spacer-l;
    position: relative;
  }
}

.ae-link {
  padding: $spacer-xxs 0;

  &__line {
    position: absolute;
    top: 14px;
    left: 11px;
    display: block;
    background: $black;
    width: 2px;
    height: 90px;
  }

  &__dot {
    display: inline-block;
    position: relative;
    margin-right: $spacer-s;
    border-radius: 50%;
    border: 2px solid transparent;
    width: 25px;
    height: 25px;
    z-index: 2;

    &:after {
      display: block;
      content: '';
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
      width: 14px;
      height: 14px;
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
.ae-nav .ae-nav__link:last-child .ae-link__line {
  display: none;
}

//active styles
.ae-nav__link {
  &:hover .ae-link__name {
    display: inline-block;
    background: $black;
  }
}

.router-link-active .ae-link {
  &__dot {
    border: 2px solid $black;
    background: $bg-color;
  }

  &__name {
    display: inline-block;
  }
}

.router-link-active ~ .ae-nav__link {
  & .ae-link__dot:after {
    background: $darkgrey;
  }

  & .ae-link__line {
    background: $darkgrey;

    &:before {
      position: absolute;
      bottom: 90px;
      left: 0;
      content: '';
      display: block;
      background: $darkgrey;
      width: 2px;
      height: 90px;
      z-index: 1;
    }
  }
  &:hover {

    & .ae-link__name {
      display: inline-block;
      background: $darkgrey;
    }

    & .ae-link__icon {
      //border: 2px solid $black;
      //background: $bg-color;
    }
  }
}
</style>
