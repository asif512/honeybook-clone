<template>
  <div class="hero-section container">
    <div class="info">
      <slot name="leftmenu">
        <h2 class="title">{{ info.title }}</h2>
        <h4 class="sub-title">{{ info.subTitle }}</h4>
        <b-button class="trial-btn" v-if="info.buttonText">{{
          info.buttonText
        }}</b-button>
        <div class="label" v-if="info.label">
          {{ info.label }}
          <a class="href" href="#">Sign up here</a>
        </div>
      </slot>
    </div>
    <div class="element-media">
      <slot name="rightmenu">
        <img class="image" :src="info.image" />
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroSection",
  props: ["info"],
};
</script>

<style lang="scss">
@import "@/scss/app.scss";

.hero-section {
  font-family: ProximaNova, sans-serif;
  text-align: left;
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
  justify-content: space-between;

  .info {
    width: 50%;
    .title {
      font-size: 40px;
      line-height: 1.18;
      // padding-top: 50px;
      font-weight: 600;
      margin: 0 0 0.5em;
    }
    .sub-title {
      font-size: 18px;
      font-weight: 400;
      line-height: 1.4;
      margin: 0 auto 45px;
    }

    .label {
      font-size: 14px;
      margin-top: 10px;
      font-weight: 400;

      .href {
        text-decoration: none;
        color: $btn-color;
      }
    }
  }

  .element-media {
    width: 50%;
    text-align: center;
  }

  @include forDesktop() {
    &.container {
      padding-top: 40px;
      padding-bottom: 40px;
    }
  }
  @include forLarge() {
    &.container {
      padding-top: 40px;
      padding-bottom: 40px;
    }
  }

  @include forMedium() {
    flex-direction: column;

    &.container {
      padding-top: 40px !important;
      padding-bottom: 40px !important;

      .info {
        width: 100%;
        text-align: center;

        .title {
          font-size: 36px;
        }
      }

      .element-media {
        width: 100%;
      }
    }
  }
}
</style>
