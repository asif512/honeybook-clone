<template>
  <div class="hero-section">
    <div class="container content">
      <div class="info">
        <h2 class="title">Contact us</h2>
        <h3 class="sub-title">We are here for you.</h3>
      </div>
      <div class="element-media">
        <img
          class="image"
          src="https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_568/v1/marketing_site/contact_us_page/member-experience-team-silly"
          alt="image"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroSection",
};
</script>

<style lang="scss" scoped>
@import "@/scss/app.scss";

.hero-section {
  background: $dark-2;
  height: 360px;
  color: $white;

  @include forLarge() {
    height: 200px;
  }

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    .info {
      text-align: left;
      padding-right: 8rem;

      @include forLarge() {
        width: 100%;
        height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .title {
        font-size: 58px;
        text-shadow: 1px 1px 2px rgba(0, 0, 11, 0.4);
        font-weight: 600;

        @include forXl() {
          font-size: 54px;
        }

        @include forLarge() {
          font-size: 44px;
          margin: 0;
        }
      }
      .sub-title {
        font-size: 28px;
        font-weight: 400;
      }
    }
    .element-media {
      margin-top: 30px;
      height: 350px;
      overflow: hidden;
      cursor: pointer;
      box-shadow: 0 20px 40px 0 rgba(0, 0, 33, 0.4);

      @include forLarge() {
        display: none;
      }
      .image {
        height: 350px;
        border-radius: 4px;

        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
}
</style>
