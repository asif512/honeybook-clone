<template>
  <div class="hero-section container">
    <div class="about-content">
      <h2 class="title">About HoneyBook</h2>
      <h3 class="sub-title">
        Empowering independent businesses to rise together doing what they love.
      </h3>
    </div>
    <div class="about-image">
      <img
        class="image"
        src="https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/about_page/About-HeroImage.png"
      />
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
  font-family: Aeonik, ProximaNova, sans-serif;
  text-align: left;
  padding-top: 20px;
  padding-bottom: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @include forMedium() {
    flex-direction: column;
  }

  .about-content {
    @include forMedium() {
      text-align: center;
      width: 60%;
    }
    .title {
      font-size: 48px;
      line-height: 1.25;
      width: 60%;
      margin-bottom: 20px;
      font-weight: 600;

      @include forMedium() {
        width: 100%;
      }
    }

    .sub-title {
      font-family: ProximaNova, sans-serif;
      font-weight: 400;
      margin-bottom: 30px;
      max-width: 480px;
      font-size: 20px;
      line-height: 1.44;
    }
  }

  .about-image {
    width: 510px;
    height: 330px;
    margin-top: 40px;

    .image {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
