<template>
    <li class="step-list-item">
      <span class="step-list-item__number">
        <span class="step-list-item__number__text">Step</span>
      </span>
      <article class="step-list-item__info">
        <slot/>
      </article>
    </li>
</template>

<script>
export default {
  name: 'step-list-item',
}
</script>
<style lang="scss">
.step-list-item {
  display: flex;
  box-shadow: $shadow_wide;
  @include only-phone{
    flex-direction: column;
  }
  @include tablet-and-desktop {
    margin-bottom: $spacer-xl;

  }

  &__number {
    display: flex;
    background-color: $magenta;
    color: $white;
    padding: $spacer-m;
    @include tablet-and-desktop{
      width: 19rem;
      padding: $spacer-l;
      text-align: center;
      position: relative;
    }

    &__text {
      @include font-size(s);
      font-weight: bold;
      display: block;
      margin: auto;
      @include tablet-and-desktop {
         @include font-size(xs);
         font-weight: normal;
      }
      &:after {
        counter-increment: count-steps;
        content: counter(count-steps);


        font-weight: bold;
        line-height: .9em;
        @include tablet-and-desktop {
          font-size: 6rem;
          display: block;
        }
      }
    }
  }
  &__info {
    padding: $spacer-l;
    padding-left: $spacer-xl;
  }
}
.step-list-item:not(:last-child) .step-list-item__number:after{
  content: '';
  height: $spacer-xl;
  width: 1px;
  display: block;
  background-color: $black;
  position: absolute;
  bottom: -$spacer-xl;
  left: 50%;
  transform: translate(-50%);
}

</style>
