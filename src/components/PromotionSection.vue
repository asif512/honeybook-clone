<template>
  <div class="promotion-section">
    <div class="wrapper container">
      <h2 class="title">
        Start for free,
        <br />
        grow for real
      </h2>

      <b-button class="trial-btn">Start free trial</b-button>
      <div class="require-label">No credit card required</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PromotionSection",
};
</script>

<style lang="scss" scoped>
@import "@/scss/app.scss";

.promotion-section {
  font-family: Aeonik, ProximaNova, sans-serif;
  background: $yellow;
  overflow: hidden;
  position: relative;
  color: $dark-1;

  &::before {
    position: absolute;
    bottom: 0;
    content: url(//res.cloudinary.com/honeybook/image/upload/v1676409508/marketing_site/home_page/conversion-B-arrow.svg);
    left: 58%;
    -webkit-transform: translate(-100%, -25%);
    transform: translate(-100%, -25%);
    @include forLarge() {
      opacity: 0;
    }
  }

  .wrapper {
    padding-top: 80px;
    padding-bottom: 70px;
    overflow: hidden;
    position: relative;
    text-align: left;

    &::before {
      left: 50%;
      -webkit-transform: translateX(-5%);
      transform: translateX(-5%);
      bottom: -5px;
      content: url(//res.cloudinary.com/honeybook/image/upload/f_auto,fl_lossy,q_auto,w_700/v1676409510/marketing_site/home_page/conversion-B.png);
      position: absolute;

      @include forSmall() {
        left: 18%;
      }
    }

    .title {
      font-size: 40px;
      line-height: 1.4;
      font-weight: 600;
      margin-bottom: 50px;
    }

    .trial-btn {
      background: $dark-1;
    }
    .require-label {
      font-size: 14px;
      font-weight: 400;
      margin-top: 20px;
    }
  }
}
</style>
