<template>
  <div class="hero-section container">
    <div class="hero-section__intro">
      <h2 class="title title-1">A life built on passion & purpose</h2>
      <h3 class="sub-title title-2">
        At HoneyBook, we believe this should be the norm, not the exception. It
        starts with our employees and it’s a connection we share with our
        members. This is the message we share and it’s at the heart of our
        culture and mission.
      </h3>
      <b-button class="trial-btn">Check open roles</b-button>
    </div>

    <div class="element-media">
      <img
        class="image"
        src="https://res.cloudinary.com/honeybook/image/upload/c_scale,f_auto,fl_lossy,q_auto,w_auto/v1/marketing_site/careers_page/career_hero/hero-grid-new.png"
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
  padding-top: 80px;
  padding-bottom: 80px;
  display: flex;
  align-items: center;

  @include forLarge() {
    flex-direction: column;
    justify-content: center;
    gap: 60px;
    padding-top: 0;
  }

  .hero-section__intro {
    width: 50%;
    text-align: left;
    padding-right: 60px;

    @include forLarge() {
      width: 80%;
      text-align: center;
    }

    @include forMedium() {
      width: 100%;
      text-align: left;
    }

    .title {
      padding-top: 50px;
      margin-bottom: 50px;
    }

    .sub-title {
      margin-bottom: 45px;
      white-space: break-spaces;
      font-size: 18px;
    }
  }

  .element-media {
    width: 50%;
    .image {
      width: 100%;
      height: auto;
    }

    @include forLarge() {
      width: 80%;
    }

    @include forMedium() {
      width: 100%;
    }
  }
}
</style>
