<template>
    <li class="step-list-item"
      :class="{ 'is-active': isActive }"
      >
      <div class="step-list-item__number">
        <div class="step-list-item__inner-wrapper">
          <div class="step-list-item__number__text">{{ name }}</div>
          <slot name="number"/>
        </div>
      </div>
      <article class="step-list-item__info">
        <slot name="info"/>
      </article>
    </li>
</template>

<script>
  export default {
    name: 'step-list-item',
    props: {
      isActive: Boolean,
      name: String
    }
  }
</script>
<style lang="scss">
.step-list-item {
  display: flex;
  box-shadow: $shadow_wide;
  margin-bottom: $spacer-xl;
  width: 100%;
  @include tablet-and-desktop {
    margin-bottom: $spacer-xl;
  }

  &__inner-wrapper {
    margin: auto;
  }

  &__number {
    display: flex;
    padding: $spacer-m;
    @include tablet-and-desktop{
      text-align: center;
      padding: $spacer-l;
      position: relative;
    }

    &__text {
      @include font-size(s);
      font-weight: bold;
      display: block;
      margin: auto;
      @include tablet-and-desktop {
         font-weight: normal;
      }
      &:after {
        counter-increment: count-steps;
        content: counter(count-steps);
        font-weight: bold;
        line-height: .9em;
        margin-left: .4em;
        @include tablet-and-desktop {
          margin: 0;
          padding: $spacer-m;
          font-size: 8.5rem;
          display: block;
        }
      }
    }
  }
  &__info {
    padding: $spacer-l;
    @include tablet-and-desktop {
      padding: $spacer-l;
      padding-left: $spacer-xl;
    }
  }
}
.is-primary {
  .step-list-item {
    flex-direction: column;
    @include tablet-and-desktop {
      flex-direction: row;
    }
    &__number{
      background-color: $magenta;
      color: $white;
      @include tablet-and-desktop{
        text-align: center;
        position: relative;
        width: 100%;
        max-width: 18rem;
      }
    }
  }


}
.is-secondary {
  .step-list-item {
    flex-direction: column;
    text-align: center;
      @include tablet-and-desktop {
        width: 100%;
        max-width: 18rem;
      }
      @include only-desktop {
        margin-right: $spacer-l;
        &:last-child {
          margin-right: 0;
        }
    }

    &__number{
      background-color: $bg-color;
      color: $dark-grey;
      margin-bottom: $spacer-l;
    }
  }
  .is-active .step-list-item {
    &__number{
      background-color: $dark-grey;
      color: $white;
    }
  }
}

@include tablet-and-desktop {
  .is-primary .step-list-item:not(:last-child) .step-list-item__number:after{
    content: '';
    height: $spacer-xl;
    width: 2px;
    display: block;
    background-color: $black;
    position: absolute;
    bottom: -$spacer-xl;
    left: 50%;
    transform: translate(-50%);
  }
}

</style>
