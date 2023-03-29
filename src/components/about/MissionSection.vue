<template>
  <div class="mission-section">
    <div class="container">
      <h2 class="title">
        Founded in 2013, HoneyBook is on a mission to make it easier to run an
        independent business and live a life filled with passion and purpose.
      </h2>
      <div class="media-element">
        <img
          class="start-img"
          src="https://res.cloudinary.com/honeybook/image/upload/c_scale,w_auto/v1/marketing_site/about_page/post-hero-stars.svg"
          alt="img"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MissionSection",
};
</script>

<style lang="scss" scoped>
@import "@/scss/app.scss";

.mission-section {
  font-family: Aeonik, ProximaNova, sans-serif;
  background-color: $yellow-1;
  padding: 80px 0;
  text-align: left;

  .container {
    display: flex;
    .title {
      font-size: 32px;
      font-weight: 600;

      @include forLarge() {
        font-size: 28px;
      }

      @include forMedium() {
        font-size: 22px;
      }
    }

    .media-element {
      margin-top: -15px;
      .start-img {
        height: 35px;
        object-fit: contain;
        width: 35px;
      }
    }
  }
}
</style>
