<template>
  <div class="promo-section">
    <div class="promo-bg container">
      <div class="content">
        <h2 class="title">Put HoneyBook to work with 20% off</h2>
        <b-button class="trial-btn">Start free trial</b-button>
        <div class="required-label">No credit card required</div>
        <div class="code">Use code <b>welcome 20</b></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PromoSection",
};
</script>

<style lang="scss" scoped>
@import "@/scss/app.scss";

.promo-section {
  background: $dark-1;
  font-family: Aeonik, ProximaNova, sans-serif;

  .promo-bg {
    background: url(//res.cloudinary.com/honeybook/image/upload/f_auto,fl_lossy,q_auto/v1676409511/marketing_site/home_page/conversion-A.png)
      no-repeat;
    background-position: 100% 100%;
    background-size: contain;
    padding-bottom: 120px;
    padding-top: 120px;

    @include forMedium() {
      background-position: bottom;
      background-size: auto 300px;
      padding: 56px 0;
    }

    .content {
      text-align: left;
      color: $white;
      .title {
        font-size: 40px;
        line-height: 1.4;
        max-width: 450px;
        font-weight: 600;
        margin-bottom: 50px;

        @include forMedium() {
          font-size: 32px;
          max-width: 300px;
        }
      }

      .required-label {
        font-size: 14px;
        margin-top: 20px;
        color: $light-4;
        font-weight: 400;
      }

      .code {
        font-size: 14px;
        color: $light-4;
        font-weight: 400;
      }
    }
  }
}
</style>
