<template>
  <div class="smarter-system-section">
    <div class="bg-image-wrapper container">
      <div class="bg-image">
        <div class="content">
          <h2 class="title">A smarter system that puts you in control</h2>
          <h3 class="sub-title">
            With your workflow and cashflow all in one place, you can focus on
            getting the most out of work and life.
          </h3>
          <b-button class="trial-btn">Start free trial</b-button>
          <div class="requie-label">No credit card required</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SmarterSystemSection",
};
</script>

<style lang="scss" scoped>
@import "@/scss/app.scss";

.smarter-system-section {
  font-family: Aeonik, ProximaNova, sans-serif;
  background: $light-3;
  padding-top: 96px;
  padding-bottom: 96px;
  color: $dark-1;

  @include forMedium() {
    padding-top: 60px;
    padding-bottom: 60px;
  }

  .bg-image-wrapper {
    .bg-image {
      background: url(//res.cloudinary.com/honeybook/image/upload/f_auto,fl_lossy,q_auto/v1677950938/marketing_site/home_page/Desktop_Better_System_2x.png)
        no-repeat;
      background-position: bottom;
      background-size: auto 575px;
      height: 575px;
      margin: 0 auto;
      widows: 100%;
      position: relative;
      max-width: 968px;

      .content {
        position: absolute;
        top: 0;
        left: 3px;
        text-align: left;
        max-width: 475px;
        margin: 0 auto 32px;

        .title {
          font-size: 40px;
          line-height: 50px;
          font-weight: 600;
          margin-bottom: 8px;
        }

        .sub-title {
          font-size: 20px;
          font-weight: 400;
          margin: 0 auto 26px;
        }

        .requie-label {
          font-size: 14px;
          font-weight: 400;
          margin-top: 12px;
        }

        @include forLarge() {
          left: 0;
          right: 0;
          text-align: center;
          margin: 0 auto 32px;
          max-width: 380px;

          .title {
            font-size: 32px;
            line-height: 38px;
          }
        }
      }

      @include forLarge() {
        background: url(//res.cloudinary.com/honeybook/image/upload/f_auto,fl_lossy,q_auto/v1677950937/marketing_site/home_page/Mobile_Better_System_2x.png)
          no-repeat;
        background-position: bottom;
        background-size: auto 278px;
        height: 580px;
      }
    }
  }
}
</style>
