<template>
  <div class="base-banner">
    <slot>
      <div class="container wrapper">
        <img class="image" :src="image" alt="img" />
        <h2 class="title">{{ title }}</h2>
        <h4 class="sub-title">
          {{ subTitle }}
        </h4>
        <b-button class="trial-btn">{{ buttonLabel }}</b-button>
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  name: "BaseBanner",
  props: {
    image: {
      default:
        "https://res.cloudinary.com/honeybook/image/upload/c_scale,w_auto/v1/marketing_site/footer-illustration-grouped.svg",
    },
    title: {
      default: "It's free to try. We hope you do.",
    },
    subTitle: {
      default: " 93% of members would recommend HoneyBook to a friend.",
    },
    buttonLabel: {
      default: " Start free trail",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/app.scss";
.base-banner {
  background-color: $dark-2;
  margin-top: 60px;
  font-family: ProximaNova, sans-serif;
  color: $white;
  overflow: hidden;
  padding-bottom: 20px;

  .wrapper {
    .image {
      height: 159px;
      position: relative;
      top: -20px;
      width: 66px;
    }
    .title {
      font-size: 40px;
      line-height: 1.18;
      font-weight: 400;
    }

    .sub-title {
      font-size: 18px;
      font-weight: 300;
      line-height: 1.44;
      font-weight: 400;
      padding: 23px 0;
    }
  }
}
</style>
